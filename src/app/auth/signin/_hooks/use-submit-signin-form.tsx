import { SubmitHandler } from "react-hook-form";
import api from "@/lib/axios-api";
import axios from "axios";
import ImperativeUI from "@/components/imperative-ui";
import Alert from "@/components/alert";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import signin, { SigninRequest } from "@/lib/api/users_signin";

function useSubmitSigninForm() {
  const router = useRouter();

  const submitSigninForm: SubmitHandler<SigninRequest> = async (input) => {
    try {
      ImperativeUI.loading(true);

      const data = await signin(input);
      const authStore = useAuthStore.getState();
      authStore.setAccessToken(data);
      router.push("/");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          ImperativeUI.show((close) => (
            <Alert
              content="로그인 정보가 일치하지 않습니다. 아이디나 비밀번호를 확인 후 다시 입력해 주세요."
              buttonText="확인"
              onClickButton={close}
            />
          ));
          return;
        }
      }
      ImperativeUI.show((close) => (
        <Alert
          content="알수없는 오류가 발생했습니다. 다시 시도해 주세요."
          buttonText="확인"
          onClickButton={close}
          onClickDimmed={close}
        />
      ));
      console.error(e);
    } finally {
      ImperativeUI.loading(false);
    }
  };

  return submitSigninForm;
}

export default useSubmitSigninForm;
