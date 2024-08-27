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
import { TRPCError } from "@trpc/server";

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
