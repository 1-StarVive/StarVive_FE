"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

type ActiveComponent = {
  key: number;
  component: React.ReactNode;
};

type State = {
  activeComponents: ActiveComponent[];
};

type Close = () => void;
export type ImperativeUIProps = {
  close: Close;
};

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
  private i: number = 0;

  constructor(props: unknown) {
    super(props);
    this.state = {
      activeComponents: [],
    };
    ImperativeUIProvider.globalThis = this;
  }

  private createComponentCloser(key: number) {
    return () => {
      this.setState((prev) => ({
        activeComponents: prev.activeComponents.filter((modal) => modal.key !== key),
      }));
    };
  }

  static show(getComponent: (close: ImperativeUIProps) => React.ReactNode): void {
    const self = ImperativeUIProvider.globalThis;
    const key = self.i++;
    const close = self.createComponentCloser(key);
    const Component = getComponent({ close });
    const newActiveComponent: ActiveComponent = {
      key,
      component: Component,
    };
    self.setState((prev) => ({
      activeComponents: [...prev.activeComponents, newActiveComponent],
    }));
  }

  render(): React.ReactNode {
    return (
      <AnimatePresence>
        {this.state.activeComponents.map(({ component, key }) => (
          <React.Fragment key={key}>{component}</React.Fragment>
        ))}
      </AnimatePresence>
    );
  }
}

export default ImperativeUIProvider;
