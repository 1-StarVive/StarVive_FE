import * as v from "valibot";
import { parse, isValid } from "date-fns";

export const phoneSchema = v.object({
  phoneTerm: v.pipe(
    v.boolean(),
    v.check((v) => v === true, "전화번호 약관에 동의해 주세요"),
  ),
  name: v.pipe(
    v.string(),
    v.minLength(2, "이름은 2자 이상이어야 합니다"),
    v.maxLength(10, "이름은 10자 이하이어야 합니다"),
  ),
  birth: v.pipe(
    v.string(),
    v.length(6, "생년월일은 6자리여야 합니다"),
    v.check((v) => isValid(parse(v, "yyMMdd", new Date())), "유효한 생년월일이 아닙니다"),
  ),
  gender: v.pipe(
    v.number("숫자만 입력 가능합니다."),
    v.check((v) => [1, 2, 3, 4].includes(v), "주민등록 번호의 첫 자리는 1, 2, 3, 4 중 하나여야 합니다"),
  ),
  phoneNumber: v.pipe(
    v.string(),
    v.check((v) => /^01[016789]\d{3,4}\d{4}$/.test(v), "유효한 휴대폰 번호를 입력해 주세요"),
  ),
  carrier: v.pipe(
    v.string(),
    v.check(
      (v) => ["KT", "SKT", "LG U+", "KT 알뜰폰", "SKT 알뜰폰", "LG U+ 알뜰폰"].includes(v),
      "통신사를 선택해 주세요",
    ),
  ),
});
export type PhoneSchema = v.InferOutput<typeof phoneSchema>;
