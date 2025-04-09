import api from "../axios-api";
import * as v from "valibot";

const signupRequest = v.object({
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

async function signup(input: SignupRequest): Promise<string> {
  const res = await api.post<string>("/users/signup", input);
  const data = v.parse(v.string(), res.data);
  return data;
}

export default signup;
