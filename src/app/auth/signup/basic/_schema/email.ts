import * as v from "valibot";

export const emailSchema = v.pipe(
  v.object({
    localPart: v.string(),
    domain: v.string(),
  }),
  v.forward(
    v.check(
      ({ domain, localPart }) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(`${localPart}@${domain}`),
      "이메일 형식이 올바르지 않습니다.",
    ),
    ["localPart"],
  ),
);
export type EmailSchema = v.InferOutput<typeof emailSchema>;
