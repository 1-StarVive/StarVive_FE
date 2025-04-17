import * as v from "valibot";
import api from "../axios-api";

export const createFeaturedSectionRequest = v.object({
  name: v.pipe(
    v.string("추천섹션명을 입력해 주세요"),
    v.minLength(4, "4자 이상 입력해 주세요"),
    v.maxLength(50, "50자 이하로 입력해 주세요"),
  ),
  activated: v.pipe(
    v.boolean(),
    v.transform((value) => Boolean(value)),
  ),
});
export type CreateFeaturedSectionRequest = v.InferOutput<typeof createFeaturedSectionRequest>;

async function creatFeaturedSection(input: CreateFeaturedSectionRequest): Promise<void> {
  await api.post<void>("/users/featured-section", input);
}

export default creatFeaturedSection;
