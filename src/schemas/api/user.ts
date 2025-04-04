import { z } from "zod";

export const signInRequest = z.object({
  loginId: z
    .string()
    .min(1, { message: "아이디를 입력해 주세요" })
    .min(4, { message: "아이디는 4~13자 이내로 입력해주세요." })
    .max(13, { message: "아이디는 4~13자 이내로 입력해주세요." }),
  password: z
    .string()
    .min(1, { message: "비밀번호를 입력해 주세요" })
    .min(10, { message: "비밀번호는 10~20자 이내로 입력해주세요." })
    .max(20, { message: "비밀번호는 10~20자 이내로 입력해주세요." }),
});
export type SignInRequest = z.infer<typeof signInRequest>;

export const signInResponse = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresIn: z.number(),
});
export type SignInResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};
