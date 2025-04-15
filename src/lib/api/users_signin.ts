import * as v from "valibot";
import api from "../axios-api";

export const signinRequest = v.object({
  loginId: v.pipe(
    v.string("아이디를 입력해 주세요"),
    v.minLength(4, "아이디는 4~13자 이내로 입력해주세요."),
    v.maxLength(13, "아이디는 4~13자 이내로 입력해주세요."),
  ),
  password: v.pipe(
    v.string("비밀번호를 입력해 주세요"),
    v.minLength(10, "비밀번호는 10~20자 이내로 입력해주세요."),
    v.maxLength(20, "비밀번호는 10~20자 이내로 입력해주세요."),
  ),
});
export type SigninRequest = v.InferOutput<typeof signinRequest>;

export const signinResponse = v.object({
  accessToken: v.string(),
  refreshToken: v.string(),
  expiresIn: v.number(),
});
export type SigninResponse = v.InferOutput<typeof signinResponse>;

async function signin(input: SigninRequest): Promise<SigninResponse> {
  const res = await api.post<SigninResponse>("/v1/users/signin", input);
  const data = v.parse(signinResponse, res.data);
  return data;
}

export default signin;
