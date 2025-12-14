import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../../trpc";
import { type VocabularyListData, VocabularyListSchema } from "~/types/ukrainian/list";
import { Language } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import { env } from "~/env";

export const listUkrainianRouter = createTRPCRouter({
    vocabularyList: protectedProcedure
        .input(z.object({ inputText: z.string() }))
        .output(VocabularyListSchema.omit({ inputText: true }))
        .mutation(async ({ ctx, input }) => {
            // Hit rust
            const res = await fetch(`${env.RUBIT_API_URL}/list/ukrainian/vocabulary/`, {
                method: "POST",
                body: JSON.stringify({
                    input_text: input.inputText,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${env.RUBIT_API_KEY}`,
                },
            });

            const json = (await res.json()) as Omit<VocabularyListData, "inputText">;

            const parsed = VocabularyListSchema.omit({
                inputText: true,
            }).safeParse(json);

            if (!parsed.success) {
                console.error(parsed.error.errors.at(0));
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    cause: "Incorrect data shape",
                    message: "Something went wrong...",
                });
            } else {
                return parsed.data;
            }
        }),

    save: protectedProcedure.input(z.object({ list: VocabularyListSchema, title: z.string() })).mutation(async ({ ctx, input }) => {
        const list = await ctx.db.savedList.create({
            data: {
                userId: ctx.session.user.id,
                language: Language.Ukrainian,
                title: input.title,
                content: JSON.stringify(input.list),
            },
            select: {
                id: true,
            },
        });

        return list;
    }),

    get: publicProcedure.input(z.object({ listId: z.string() })).query(async ({ ctx, input }) => {
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
            content: savedList.content as VocabularyListData,
        };
    }),

    bySessionUser: protectedProcedure.query(async ({ ctx }) => {
        const savedLists = await ctx.db.savedList.findMany({
            where: {
                userId: ctx.session.user.id,
                language: Language.Ukrainian,
            },
        });

        return savedLists.map((list) => ({
            ...list,
            content: list.content as VocabularyListData,
        }));
    }),
});
