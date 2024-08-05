import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "../../trpc";
import { VocabularyListSchema } from "~/types/russian/list";
import { Language } from "@prisma/client";

export const listRussianRouter = createTRPCRouter({
    vocabularyList: protectedProcedure
        .input(z.object({ inputText: z.string() }))
        .output(VocabularyListSchema)
        .mutation(async ({ ctx, input }) => {
            // Hit rust
            const res = await fetch(
                "http://api.russianvocabularylistmaker.com/list/russian/vocabulary",
                {
                    method: "post",
                    body: JSON.stringify({
                        input_text: input.inputText,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const data = VocabularyListSchema.parse(await res.json());

            return data;
        }),

    get: publicProcedure
        .input(z.object({ listId: z.string() }))
        .query(async ({ ctx, input }) => {
            return await ctx.db.savedList.findUnique({
                where: {
                    id: input.listId,
                },
            });
        }),
    getUsers: protectedProcedure.query(async ({ ctx }) => {
        return await ctx.db.savedList.findMany({
            where: {
                userId: ctx.session.user.id,
                language: Language.Russian,
            },
        });
    }),
});
