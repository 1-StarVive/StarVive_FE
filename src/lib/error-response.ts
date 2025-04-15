import * as v from "valibot";

/** HTTP요청 error시 백엔드에서 보내주는 포맷 */
export const errorResponse = v.object({
  message: v.string(),
  code: v.number(),
});
export type ErrorResponse = v.InferOutput<typeof errorResponse>;
