import * as v from "valibot";

export const nicknameSchema = v.object({
  nicknameTermAgreed: v.pipe(
    v.boolean(),
    v.custom((v) => v === true, "닉네임 약관에 동의해 주세요"),
  ),
  nickname: v.pipe(
    v.string("닉네임을 입력해 주세요"),
    v.minLength(2, "닉네임은 2~10자 이내로 입력해주세요."),
    v.maxLength(10, "닉네임은 2~10자 이내로 입력해주세요."),
  ),
});
export type NicknameSchema = v.InferOutput<typeof nicknameSchema>;
