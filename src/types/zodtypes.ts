import { z } from "zod";
export const SignUpType = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
