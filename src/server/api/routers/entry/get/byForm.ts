import { z } from "zod";
import { publicProcedure } from "~/server/api/trpc";
import { env } from "~/env";
import { RussianModel, type VocabularyListData } from "~/types/russian/list";
import { TRPCError } from "@trpc/server";

export const byForm = publicProcedure.input(z.object({ form: z.string() })).mutation(async ({ input }) => {
    if (input.form == "") {
        throw new TRPCError({ code: "BAD_REQUEST", cause: "Empty string", message: "Empty value passed" });
    }

    const res = await fetch(`${env.RUBIT_API_URL}/russian/entry/get/by-form`, {
        method: "POST",
        body: JSON.stringify({ form: input.form }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.RUBIT_API_KEY}`,
        },
    });

    const json = (await res.json()) as {
        models: RussianModel[];
    };

    return json.models;
});
