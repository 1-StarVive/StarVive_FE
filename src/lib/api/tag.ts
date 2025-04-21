import api from "../axios-api";
import * as v from "valibot";

export const getTagAllResponse = v.array(
  v.object({
    tagId: v.string(),
    name: v.string(),
    imageThumbUrl: v.string(),
    imageThumbAlt: v.string(),
  }),
);

export type GetTagAllResponse = v.InferOutput<typeof getTagAllResponse>;

export async function getTagAll(): Promise<GetTagAllResponse> {
  const res = await api.get<GetTagAllResponse>("/v1/tag/all");
  const data = v.parse(getTagAllResponse, res.data);
  return data;
}
