import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { type VerbModel } from "~/types/russian/list/verb";

export const verbsRussianRouter = createTRPCRouter({
    getAll: publicProcedure.query(async () => {
        const res = await fetch(`${env.RUBIT_API_URL}/verbs/russian`, {
            method: "get",
            headers: {
                Authorization: `Bearer ${env.RUBIT_API_KEY}`,
            },
        });
        const data = (await res.json()) as { items: VerbModel[] };
        return data;
    }),
});
