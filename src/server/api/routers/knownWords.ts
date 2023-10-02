import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const knownWordsRouter = createTRPCRouter({
    // Known Words
    addToUserKnownWords: protectedProcedure
        .input(z.object({ entryLemma: z.string() }))
        .mutation(async ({ ctx, input }) => {
            let vocabEntry = await ctx.db.vocabEntry.findFirst({
                where: { lemma: input.entryLemma },
            });

            if (!vocabEntry) {
                vocabEntry = await ctx.db.vocabEntry.create({
                    data: { lemma: input.entryLemma },
                });
            }

            const word = await ctx.db.user.update({
                where: { id: ctx.session.user.id },
                data: { knownWords: { connect: { id: vocabEntry.id } } },
            });

            return "fo";
        }),
    removeFromUserKnownWords: protectedProcedure
        .input(z.object({ entryLemma: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const vocabEntry = await ctx.db.vocabEntry.findFirst({
                where: { lemma: input.entryLemma },
            });

            if (!vocabEntry) {
                await ctx.db.vocabEntry.create({
                    data: { lemma: input.entryLemma },
                });
                return "fp";
            }

            const word = await ctx.db.user.update({
                where: { id: ctx.session.user.id },
                data: { knownWords: { disconnect: { id: vocabEntry.id } } },
            });

            return "fo";
        }),
    getUsersKnownWords: protectedProcedure.query(async ({ ctx }) => {
        const usersWords = await ctx.db.user.findUnique({
            where: { id: ctx.session.user.id },
            include: { knownWords: true },
        });

        if (!usersWords) {
            throw new TRPCError({ code: "NOT_FOUND" });
        }

        return usersWords.knownWords;
    }),
});
