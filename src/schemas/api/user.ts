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

export const termSchema = z.object({
  이용약관_동의: z.boolean(),
  //.refine((v) => v === true)
  개인정보_수집_및_이용_동의: z.boolean(),
  //.refine((v) => v === true)
  스타벅스_카드_이용약관: z.boolean(),
  //.refine((v) => v === true)
  마케팅_정보_수신_동의_이메일: z.boolean().optional(),
  마케팅_정보_수신_동의_SMS: z.boolean().optional(),
});
export type TermSchema = z.infer<typeof termSchema>;

export const signUpRequest = termSchema;
export type SignUpRequest = TermSchema;

export const identityVerificationTypeSchema = z.object({
  type: z.enum(["toss", "phone"]),
});
