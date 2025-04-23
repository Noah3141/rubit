import { z } from "zod";
import { env } from "~/env";
import { adminProcedure, createTRPCRouter } from "~/server/api/trpc";
import { DictionaryInfoSchema } from "~/types/russian/dictionary_info";
import { RussianModelSchema, TypeSchema, type RussianModel } from "~/types/russian/list";

// export const createRouter = createTRPCRouter({

// });

export const create = adminProcedure
    .input(
        z.object({
            lemma: z.string(),
            type: TypeSchema,
            commonality: z.number().nullable(),
            meanings: z.string().nullable(),
            dictionary_info: DictionaryInfoSchema,
        }),
    )
    .mutation(async ({ input }) => {
        const res = await fetch(`${env.RUBIT_API_URL}/russian/entry/create`, {
            method: "post",
            headers: {
                Authorization: `Bearer ${env.RUBIT_API_KEY}`,
                "Content-Type": "application/json",
            },

            body: JSON.stringify(input),
        });

        let text: string;
        try {
            text = await res.text();
        } catch (error) {
            console.error("Failed to read response body:", (error as Error).message);
            throw error;
        }

        if (!res.ok) {
            console.error("Bad response status:", res.status);
            console.error("Body:", text);
            throw new Error(`Request failed with status ${res.status}`);
        }

        try {
            const data = JSON.parse(text) as { created: RussianModel };
            RussianModelSchema.parse(data.created);
            return data;
        } catch (error) {
            console.error("Failed to parse JSON:", (error as Error).message);
            console.error("Body was:", text);
            throw error;
        }
    });
