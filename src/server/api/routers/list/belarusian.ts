import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "../../trpc";
import {
    type VocabularyListData,
    VocabularyListSchema,
} from "~/types/belarusian/list";
import { Language } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import { env } from "~/env";

export const listBelarusianRouter = createTRPCRouter({
    vocabularyList: protectedProcedure
        .input(z.object({ inputText: z.string() }))
        .output(VocabularyListSchema.omit({ inputText: true }))
        .mutation(async ({ ctx, input }) => {
            // Hit rust
            const res = await fetch(
                `${env.RUBIT_API_URL}/list/belarusian/vocabulary/`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        input_text: input.inputText,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${env.RUBIT_API_KEY}`,
                    },
                },
            );

            const json = (await res.json()) as Omit<
                VocabularyListData,
                "inputText"
            >;

            return json;
        }),

    save: protectedProcedure
        .input(z.object({ list: VocabularyListSchema, title: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const list = await ctx.db.savedList.create({
                data: {
                    userId: ctx.session.user.id,
                    language: Language.Belarusian,
                    title: input.title,
                    content: JSON.stringify(input.list),
                },
                select: {
                    id: true,
                },
            });

            return list;
        }),

    get: publicProcedure
        .input(z.object({ listId: z.string() }))
        .query(async ({ ctx, input }) => {
            const savedList = await ctx.db.savedList.findUnique({
                where: {
                    id: input.listId,
                },
            });

            if (!savedList) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "We couldn't find that list!",
                });
            }

            return {
                ...savedList,
                content: JSON.parse(savedList.content) as VocabularyListData,
            };
        }),

    bySessionUser: protectedProcedure.query(async ({ ctx }) => {
        const savedLists = await ctx.db.savedList.findMany({
            where: {
                userId: ctx.session.user.id,
                language: Language.Belarusian,
            },
        });

        return savedLists.map((list) => ({
            ...list,
            content: JSON.parse(list.content) as VocabularyListData,
        }));
    }),
});
