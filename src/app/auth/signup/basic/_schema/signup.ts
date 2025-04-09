import * as v from "valibot";
import { emailSchema } from "./email";
import { idPasswordSchema } from "./id-password";
import { nicknameSchema } from "./nickname";
import { phoneSchema } from "./phone";
import { termSchema } from "./term";

export const signupSchema = v.intersect([termSchema, idPasswordSchema, phoneSchema, emailSchema, nicknameSchema]);
export type SignupSchema = v.InferOutput<typeof signupSchema>;
