import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { env } from "~/env";
import { type VocabularyListData } from "~/types/russian/list";
import { TRPCError } from "@trpc/server";

export const getForWord = publicProcedure.input(z.object({ word: z.string() })).mutation(async ({ ctx, input }) => {
    if (input.word == "") {
        throw new TRPCError({ code: "BAD_REQUEST", cause: "Empty string", message: "Empty value passed" });
    }

    const res = await fetch(`${env.RUBIT_API_URL}/get/word`, {
        method: "POST",
        body: JSON.stringify({ word: input.word }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.RUBIT_API_KEY}`,
        },
    });

    const json = (await res.json()) as {
        entries: VocabularyListData["entry_list"][0]["model"][];
    };

    return json.entries;
});
