"use client";

import React, { ComponentType } from "react";
import { AnimatePresence } from "framer-motion";
import Alert, { AlertProps } from "@/components/alert";

type ActiveComponent = {
  key: number;
  component: React.ReactNode;
};

type State = {
  activeComponents: ActiveComponent[];
};

type Close = () => void;
type GetProps<Props> = (close: Close) => Props;
type GetDefaultProps<Props> = (close: Close) => Partial<Props>;

/**
 * 명령형으로 컴포넌트를 띄운다. Provider위치를 기준으로 띄우기 때문에 보통 Modal을 띄울 때 사용함.
 *
 * @example
 * // 최상위에 다음을 넣음
 * <ImperativeUIProvider />
 *
 * // 사용 예시
 * ImperativeUI.alert(...)
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

  private showComponent<Props extends Record<string, unknown>>(
    Component: ComponentType<Props>,
    getProps: GetProps<Props>,
    getDefaultProps?: GetDefaultProps<Props>,
  ): void {
    const key = this.i++;
    const close = this.createComponentCloser(key);

    const props = getProps(close);
    const defaultProps = getDefaultProps?.(close) ?? {};

    const newActiveComponent: ActiveComponent = {
      key,
      component: <Component {...defaultProps} {...props} />,
    };
    this.setState((prev) => ({
      activeComponents: [...prev.activeComponents, newActiveComponent],
    }));
  }

  private createComponentCloser(key: number) {
    return () => {
      this.setState((prev) => ({
        activeComponents: prev.activeComponents.filter((modal) => modal.key !== key),
      }));
    };
  }

  static alert(getProps: GetProps<AlertProps>): void {
    const Component = Alert;
    const getDefaultProps: GetDefaultProps<AlertProps> = (close) => ({
      onClickButton: close,
      onClickDimmed: close,
    });
    ImperativeUIProvider.globalThis.showComponent(Component, getProps, getDefaultProps);
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
