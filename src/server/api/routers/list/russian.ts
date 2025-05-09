import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../../trpc";
import { RussianModel, RussianModelSchema, type VocabularyListData, VocabularyListSchema } from "~/types/russian/list";
import { Language } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import { env } from "~/env";

type StoredList = {
    inputText: string;
    form_frequencies: Record<string, number>;
    entry_list: {
        frequency: number;
        modelId: number;
    }[];
};

export const listRussianRouter = createTRPCRouter({
    vocabularyList: protectedProcedure
        .input(z.object({ inputText: z.string() }))
        .output(VocabularyListSchema.omit({ inputText: true }))
        .mutation(async ({ ctx, input }) => {
            // Hit rust
            const res = await fetch(`${env.RUBIT_API_URL}/list/russian/vocabulary/`, {
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

            return json;
        }),

    save: protectedProcedure.input(z.object({ list: VocabularyListSchema, title: z.string() })).mutation(async ({ ctx, input }) => {
        const list = await ctx.db.savedList.create({
            data: {
                userId: ctx.session.user.id,
                language: Language.Russian,
                title: input.title,
                content: JSON.stringify({
                    inputText: input.list.inputText,
                    form_frequencies: input.list.form_frequencies,
                    entry_list: input.list.entry_list.map((entry) => ({
                        frequency: entry.frequency,
                        modelId: entry.model.id,
                    })),
                } satisfies StoredList),
            },
            select: {
                id: true,
            },
        });

        return list;
    }),

    update: protectedProcedure //
        .input(z.object({ listId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const toUpdate = await ctx.db.savedList.findUnique({ where: { id: input.listId } });

            if (!toUpdate) {
                throw new TRPCError({ code: "NOT_FOUND" });
            }
            const content = JSON.parse(toUpdate.content) as StoredList;

            const res = await fetch(`${env.RUBIT_API_URL}/list/russian/vocabulary/`, {
                method: "POST",
                body: JSON.stringify({
                    input_text: content.inputText,
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${env.RUBIT_API_KEY}`,
                },
            });

            const json = (await res.json()) as Omit<VocabularyListData, "inputText">;

            const updated = ctx.db.savedList.update({
                where: {
                    id: input.listId,
                },
                data: {
                    content: JSON.stringify({
                        ...content,
                        form_frequencies: json.form_frequencies,
                        entry_list: json.entry_list.map((entry) => ({
                            frequency: entry.frequency,
                            modelId: entry.model.id,
                        })),
                    } satisfies StoredList),
                },
            });
            return updated;
        }),

    get: publicProcedure //
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
            const extractedList = {
                ...savedList,
                content: JSON.parse(savedList.content) as StoredList, // I changed from db.text to Json , does this still need to parse or just be as is?
            };

            const res = await fetch(`${env.RUBIT_API_URL}/russian/entry/get/by-ids`, {
                method: "POST",
                body: JSON.stringify({
                    ids: extractedList.content.entry_list.map((entry) => entry.modelId),
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${env.RUBIT_API_KEY}`,
                },
            });

            const json = (await res.json()) as {
                models: RussianModel[];
            };

            const rebuiltList = {
                ...extractedList,
                entry_list: extractedList.content.entry_list.map((entry): VocabularyListData["entry_list"][0] => {
                    const model = json.models.find((found) => found.id == entry.modelId)!;

                    return {
                        frequency: entry.frequency,
                        model,
                    } as VocabularyListData["entry_list"][0];
                }),
                inputText: extractedList.content.inputText,
                form_frequencies: extractedList.content.form_frequencies,
            };

            return rebuiltList;
        }),

    bySessionUser: protectedProcedure.query(async ({ ctx }) => {
        const savedLists = await ctx.db.savedList.findMany({
            where: {
                userId: ctx.session.user.id,
                language: Language.Russian,
            },
        });

        return savedLists.map((list) => ({
            ...list,
            content: JSON.parse(list.content) as StoredList,
        }));
    }),
});
