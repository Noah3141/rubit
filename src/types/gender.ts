import { z } from "zod";

export const Gender = z.enum(["Masculine", "Feminine", "Neuter"]);
