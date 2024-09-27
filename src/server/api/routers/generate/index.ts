import { Language } from "@prisma/client";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { z } from "zod";
import OpenAI from "openai";
import { TRPCError } from "@trpc/server";

export const generateRouter = createTRPCRouter({
    exampleSentence: protectedProcedure
        .input(z.object({ word: z.string(), language: z.nativeEnum(Language) }))
        .mutation(async ({ ctx, input }) => {
            const openai = new OpenAI();

            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: `You are a ${input.language} language teacher. 
                        Given a word, respond with an example sentence using the word, 
                        following by the English, separated by a newline.`,
                    },
                    {
                        role: "user",
                        content: `${input.word}`,
                    },
                ],
                model: "gpt-3.5-turbo",
                temperature: 0.55,
            });

            const lines = completion.choices
                .at(0)
                ?.message.content?.split("\n");

            if (lines?.length == 2) {
                return {
                    sentence: lines[0]!,
                    translation: lines[1]!,
                };
            }

            console.error(lines);
            throw new TRPCError({
                code: "CONFLICT",
                message: "Something went wrong with ChatGPT!",
            });
        }),
    exampleSentences: protectedProcedure
        .input(z.object({ word: z.string(), language: z.nativeEnum(Language) }))
        .mutation(async ({ ctx, input }) => {
            const openai = new OpenAI();

            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: `You are a ${input.language} language teacher. Given a word, respond only with: 3 example sentences using the word, each following by the English, separated by a newlines.`,
                    },
                    {
                        role: "user",
                        content: input.word,
                    },
                ],
                model: "gpt-3.5-turbo",
                temperature: 0.45,
            });

            const lines = completion.choices
                .at(0)
                ?.message.content?.split("\n");

            if (lines?.length == 6) {
                return [
                    {
                        sentence: lines[0]!,
                        translation: lines[1]!,
                    },
                    {
                        sentence: lines[2]!,
                        translation: lines[3]!,
                    },
                    {
                        sentence: lines[4]!,
                        translation: lines[5]!,
                    },
                ];
            }

            console.error(lines);
            throw new TRPCError({
                code: "CONFLICT",
                message: "Something went wrong with ChatGPT!",
            });
        }),
});
