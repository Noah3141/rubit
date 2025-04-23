import { z } from "zod";
import { env } from "~/env";
import { adminProcedure } from "~/server/api/trpc";
import { DictionaryInfoSchema } from "~/types/russian/dictionary_info";
import { type RussianModel } from "~/types/russian/list";

// export const updateRouter = createTRPCRouter({});

export const update = adminProcedure
    .input(
        z.object({
            id: z.number(),
            update: z.union([
                z.object({ type: z.literal("Meanings"), data: z.string() }),
                z.object({ type: z.literal("Commonality"), data: z.number() }),
                z.object({ type: z.literal("DictionaryInfo"), data: DictionaryInfoSchema }),
            ]),
        }),
    )
    .mutation(async ({ input }) => {
        const res = await fetch(`${env.RUBIT_API_URL}/russian/entry/update`, {
            method: "post",
            headers: {
                Authorization: `Bearer ${env.RUBIT_API_KEY}`,
            },
            body: JSON.stringify(input),
        });
        const data = (await res.json()) as { updated: RussianModel };
        return data;
    });
