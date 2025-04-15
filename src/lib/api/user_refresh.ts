import axios from "axios";
import * as v from "valibot";

export const refreshResponse = v.object({
  accessToken: v.string(),
  expiresIn: v.number(),
});
export type RefreshResponse = v.InferOutput<typeof refreshResponse>;

export async function refresh(refreshToken: string): Promise<RefreshResponse> {
  const res = await axios.post<RefreshResponse>(`${process.env.NEXT_PUBLIC_API_URL}/v1/users/refresh`, {
    refreshToken,
  });
  const data = v.parse(refreshResponse, res.data);
  return data;
}
