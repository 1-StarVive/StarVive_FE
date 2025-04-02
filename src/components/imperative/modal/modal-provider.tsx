"use client";

import React, { ComponentType } from "react";
import { AnimatePresence } from "framer-motion";
import Alert, { AlertProps } from "@/components/alert";

type ActiveModal = {
  key: string;
  modal: React.ReactNode;
};

type ModalProviderState = {
  activeModals: ActiveModal[];
};

type GetBaseModalPropsArgs = {
  close: () => void;
  key: string;
};

/**
 * 명령형으로 Modal을 띄울수 있게 한다.
 *
 * @example
 * // 최상위에 다음을 넣음
 * <ModalProvider />
 *
 * // modal사용시
 * Modal.alert(...)
 */
class ModalProvider extends React.Component<{}, ModalProviderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeModals: [],
    };
    ModalProvider.globalThis = this;
  }

  private static globalThis: ModalProvider;

  private addModal<T>(
    ModalComponent: ComponentType<T>,
    getModalProps: (args: GetBaseModalPropsArgs) => T,
    wrapModalProps?: (args: GetBaseModalPropsArgs) => (props: T) => Partial<T>,
  ): void {
    const key = String(Math.random());
    const baseModalProps = { close: this.getCloseModal(key), key };
    const modalProps = getModalProps(baseModalProps);
    const modifiedProps = wrapModalProps?.(baseModalProps)(modalProps) ?? {};
    const newActiveModal = {
      key,
      modal: <ModalComponent {...modalProps} {...modifiedProps} />,
    };
    this.setState((prev) => ({
      activeModals: [...prev.activeModals, newActiveModal],
    }));
  }

  private getCloseModal(key: string) {
    return () => {
      this.setState((prev) => ({
        activeModals: prev.activeModals.filter((modal) => modal.key !== key),
      }));
    };
  }

  static alert(getAlertProps: (args: GetBaseModalPropsArgs) => AlertProps): void {
    ModalProvider.globalThis.addModal(Alert, getAlertProps, ({ close }) => ({ onClickButton, onClickDimmed }) => ({
      ...(!onClickButton && { onClickButton: close }),
      ...(!onClickDimmed && { onClickDimmed: close }),
    }));
  }

  // static confirm(getConfirmProps: (args: GetBaseModalPropsArgs) => ConfirmProps): void {
  //   ModalProvider.globalThis.addModal(
  //     Confirm,
  //     getConfirmProps,
  //     ({ close }) =>
  //       ({ onClickConfirmButton, onClickCloseButton }) => ({
  //         ...(!onClickConfirmButton && { onClickConfirmButton: close }),
  //         ...(!onClickCloseButton && { onClickCloseButton: close }),
  //       }),
  //   );
  // }

  render(): React.ReactNode {
    return (
      <AnimatePresence>
        {this.state.activeModals.map(({ modal, key }) => (
          <React.Fragment key={key}>{modal}</React.Fragment>
        ))}
      </AnimatePresence>
    );
  }
}

export default ModalProvider;
