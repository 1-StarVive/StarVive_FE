import * as v from "valibot";

export const termSchema = v.object({
  /** 이용약관 동의 */
  termsAgreed: v.pipe(
    v.boolean(),
    v.check((v) => v === true, "이용약관에 동의해 주세요"),
  ),
  /** 개인정보 수집 및 이용에 동의해야 합니다. */
  privacyAgreed: v.pipe(
    v.boolean(),
    v.check((v) => v === true, "개인정보 수집 및 이용 약관에 동의해 주세요"),
  ),
  /** 스타벅스 카드 이용약관에 동의해야 합니다. */
  cardTermsAgreed: v.pipe(
    v.boolean(),
    v.check((v) => v === true, "스타벅스 카드 이용 약관에 동의해 주세요"),
  ),
  /** 마케팅 정보 수신 동의 이메일 */
  marketingEmailAgreed: v.optional(v.boolean()),
  /** 마케팅 정보 수신 동의 SMS */
  marketingSmsAgreed: v.optional(v.boolean()),
});
export type TermSchema = v.InferOutput<typeof termSchema>;
