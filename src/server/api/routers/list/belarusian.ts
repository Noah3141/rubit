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

            const nouns = json.entry_list
                .filter((t) => t.model.type == "Noun")
                .map((t) => NounEntry.parse(t));

            const verbs = json.entry_list
                .filter((t) => t.model.type == "Verb")
                .map((t) => VerbEntry.parse(t));

            const adj = json.entry_list
                .filter((t) => t.model.type == "Adjective")
                .map((t) => AdjEntry.parse(t));

            const adv = json.entry_list
                .filter((t) => t.model.type == "Adverb")
                .map((t) => AdvEntry.parse(t));

            z.record(z.number()).parse(json.form_frequencies);

            return json;
        }),

    save: protectedProcedure
        .input(VocabularyListSchema)
        .mutation(async ({ ctx, input }) => {
            await ctx.db.savedList.create({
                data: {
                    language: Language.Belarusian,
                    entry_list: input.entry_list,
                    inputText: input.inputText,
                    form_frequencies: input.form_frequencies,
                    userId: ctx.session.user.id,
                },
            });
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
