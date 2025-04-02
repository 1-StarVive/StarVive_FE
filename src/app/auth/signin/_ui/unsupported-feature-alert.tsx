import Alert from "@/components/alert";
import { ImperativeUIProps } from "@/components/imperative-ui/imperative-ui-provider";

function UnsupportedFeatureAlert({ close }: ImperativeUIProps) {
  return (
    <Alert
      title="안내"
      content="지원하지 않는 기능입니다."
      buttonText="확인"
      onClickButton={close}
      onClickDimmed={close}
    />
  );
}

export default UnsupportedFeatureAlert;
