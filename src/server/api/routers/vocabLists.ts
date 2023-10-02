import { TRPCError } from "@trpc/server";
import { z } from "zod";
import RawVocabularyList from "~/models/vocabulary_lists";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const savedListsRouter = createTRPCRouter({
    // Vocab Lists
    getUserSavedLists: protectedProcedure.query(async ({ ctx }) => {
        const lists = await ctx.db.vocabList.findMany({
            where: { userId: ctx.session.user.id },
            include: { entries: true },
        });

        return lists;
    }),
    getUserSavedListWithText: protectedProcedure
        .input(z.object({ listId: z.string() }))
        .query(async ({ ctx, input }) => {
            const list = await ctx.db.vocabList.findUnique({
                where: { userId: ctx.session.user.id, id: input.listId },
                include: { entries: true, sourceText: true },
            });

            return list;
        }),

    addToUserSavedLists: protectedProcedure
        .input(
            z.object({
                sourceText: z.string(),
                title: z.string(),
                listData: z.any(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            if (!(input.listData as RawVocabularyList)) {
                throw new TRPCError({ code: "BAD_REQUEST" });
            }

            if (input.title === "")
                throw new TRPCError({ code: "PARSE_ERROR" });

            const list = (input.listData as RawVocabularyList).entry_list.map(
                (entry) => ({ lemma: entry.lemma, frequency: entry.frequency }),
            );

            const newList = await ctx.db.vocabList.create({
                data: {
                    title: input.title,
                    User: { connect: { id: ctx.session.user.id } },
                    sourceText: {
                        create: {
                            content: input.sourceText,
                        },
                    },
                    entries: {
                        create: list,
                    },
                },
            });
        }),

    updateKnownPercentage: protectedProcedure
        .input(
            z.object({
                listId: z.string(),
                knownPercentage: z.string(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const newListState = await ctx.db.vocabList.update({
                where: { userId: ctx.session.user.id, id: input.listId },
                data: {
                    knownPercent: input.knownPercentage,
                },
            });

            return "foo";
        }),

    removeFromUserSavedLists: protectedProcedure
        .input(z.object({ listId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const removedList = await ctx.db.vocabList.delete({
                where: { id: input.listId },
                include: { entries: true, sourceText: true },
            });

            return removedList;
        }),
});
