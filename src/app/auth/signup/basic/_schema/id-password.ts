import * as v from "valibot";

export const idPasswordSchema = v.intersect([
  v.object({
    loginId: v.pipe(
      v.string("아이디를 입력해 주세요"),
      v.minLength(4, "아이디는 4~13자 이내로 입력해주세요."),
      v.maxLength(13, "아이디는 4~13자 이내로 입력해주세요."),
    ),
  }),
  v.pipe(
    v.object({
      password: v.pipe(
        v.string("비밀번호를 입력해 주세요"),
        v.minLength(10, "비밀번호는 10~20자 이내로 입력해주세요."),
        v.maxLength(20, "비밀번호는 10~20자 이내로 입력해주세요."),
      ),
      confirmPassword: v.pipe(
        v.string("비밀번호를 입력해 주세요"),
        v.minLength(10, "비밀번호는 10~20자 이내로 입력해주세요."),
        v.maxLength(20, "비밀번호는 10~20자 이내로 입력해주세요."),
      ),
    }),
    v.forward(
      v.check((input) => input.password === input.confirmPassword, "비밀번호가 일치하지 않습니다."),
      ["confirmPassword"],
    ),
  ),
]);
export type IdPasswordSchema = v.InferOutput<typeof idPasswordSchema>;
