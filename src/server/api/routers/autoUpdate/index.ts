import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { VocabularyEntry } from "~/types/russian/list";
import { getMeanings } from "./fetches/getMeaning";

export const autoUpdateRouter = createTRPCRouter({
    entry: publicProcedure
        .input(
            z.object({
                entry: VocabularyEntry.optional(),
            }),
        )
        .query(async ({ input, ctx }) => {
            if (!input.entry) {
                return;
            }

            if (!input.entry.model.meanings) {
                const meanings = await getMeanings(
                    input.entry.model.lemma.replace("\u0301", ""),
                );
                return meanings;
            }
        }),
});