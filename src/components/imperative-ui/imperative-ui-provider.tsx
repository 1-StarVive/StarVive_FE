"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

type ActiveReactNode = {
  key: number;
  reactNode: React.ReactNode;
};

type State = {
  activeReactNodes: ActiveReactNode[];
};

type GetReactNode = (close: Close) => React.ReactNode;

export type ImperativeUIProps = {
  close: () => void;
};
export type Close = () => void;

/**
 * 명령형으로 컴포넌트를 띄운다. Provider위치를 기준으로 띄우기 때문에 보통 Modal을 띄울 때 사용함.
 *
 * @example
 * // 최상위에 다음을 넣음
 * <ImperativeUIProvider />
 *
 * // 사용 예시
 * ImperativeUI.show(({ close }) => <Alert onClick={close} />);
 */
class ImperativeUIProvider extends React.Component<unknown, State> {
  private static globalThis: ImperativeUIProvider;
  private i = 0;

  constructor(props: unknown) {
    super(props);
    this.state = {
      activeReactNodes: [],
    };
    ImperativeUIProvider.globalThis = this;
  }

  static show(getReactNode: GetReactNode): void {
    const self = ImperativeUIProvider.globalThis;
    const key = self.i++;
    const close = () =>
      self.setState((prev) => ({
        activeReactNodes: prev.activeReactNodes.filter((modal) => modal.key !== key),
      }));
    const reactNode = getReactNode(close);
    const newActiveReactNode: ActiveReactNode = {
      key,
      reactNode,
    };
    self.setState((prev) => ({
      activeReactNodes: [...prev.activeReactNodes, newActiveReactNode],
    }));
  }

  render(): React.ReactNode {
    return (
      <AnimatePresence>
        {this.state.activeReactNodes.map(({ reactNode, key }) => (
          <React.Fragment key={key}>{reactNode}</React.Fragment>
        ))}
      </AnimatePresence>
    );
  }
}

export default ImperativeUIProvider;
