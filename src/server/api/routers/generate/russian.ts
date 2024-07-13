import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { VocabularyListSchema } from "~/types/russian/list";

export const generateRussianRouter = createTRPCRouter({
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
                        breadth: 100,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const data = VocabularyListSchema.parse(await res.json());

            return data;
        }),
});
