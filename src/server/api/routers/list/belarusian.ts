import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "../../trpc";
import {
    VocabularyListData,
    VocabularyListSchema,
} from "~/types/belarusian/list";
import { NounEntry } from "~/types/belarusian/list/noun";
import { VerbEntry } from "~/types/belarusian/list/verb";
import { AdjEntry } from "~/types/belarusian/list/adjective";
import { AdvEntry } from "~/types/belarusian/list/adverb";
import { Language } from "@prisma/client";

export const listBelarusianRouter = createTRPCRouter({
    vocabularyList: protectedProcedure
        .input(z.object({ inputText: z.string() }))
        .output(VocabularyListSchema.omit({ inputText: true }))
        .mutation(async ({ ctx, input }) => {
            // Hit rust
            const res = await fetch(
                "http://api.russianvocabularylistmaker.com/list/belarusian/vocabulary",
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
                    ...input.list,
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
                language: Language.Belarusian,
            },
        });
    }),
});
