import axios from "axios";
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

export async function signin(input: SigninRequest): Promise<SigninResponse> {
  const res = await api.post<SigninResponse>("/v1/users/signin", input);
  const data = v.parse(signinResponse, res.data);
  return data;
}

export const signupRequest = v.object({
  loginId: v.string(),
  email: v.string(),
  password: v.string(),
  name: v.string(),
  nickname: v.string(),
  phoneNumber: v.string(),
  birth: v.string(),
  gender: v.string(),
  termsAgreed: v.boolean(),
  privacyAgreed: v.boolean(),
  cardTermsAgreed: v.boolean(),
  nicknameTermAgreed: v.boolean(),
  marketingEmailAgreed: v.optional(v.boolean()),
  marketingSmsAgreed: v.optional(v.boolean()),
});
export type SignupRequest = v.InferOutput<typeof signupRequest>;

export async function signup(input: SignupRequest): Promise<string> {
  const res = await api.post<string>("/v1/users/signup", input);
  const data = v.parse(v.string(), res.data);
  return data;
}

export const refreshResponse = v.object({
  accessToken: v.string(),
  expiresIn: v.number(),
});
export type RefreshResponse = v.InferOutput<typeof refreshResponse>;

export async function refresh(refreshToken: string): Promise<RefreshResponse> {
  const res = await axios.post<RefreshResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/refresh`, {
    refreshToken,
  });
  const data = v.parse(refreshResponse, res.data);
  return data;
}
