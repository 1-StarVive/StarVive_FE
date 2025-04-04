import Alert from "@/components/alert";
import ImperativeUI from "@/components/imperative-ui";

export const onClickFind = () => {
  ImperativeUI.show((close) => (
    <Alert title="안내" content="지원하지 않는 기능입니다." buttonText="확인" onClickButton={close} />
  ));
};
