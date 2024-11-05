import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../trpc";
import { listBelarusianRouter } from "./belarusian";
import { listRussianRouter } from "./russian";
import { listUkrainianRouter } from "./ukrainian";
import { TRPCError } from "@trpc/server";

export const listRouter = createTRPCRouter({
    russian: listRussianRouter,
    belarusian: listBelarusianRouter,
    ukrainian: listUkrainianRouter,

    update: protectedProcedure
        .input(z.object({ title: z.string().optional(), id: z.string() }))
        .mutation(async ({ input: { id, ...input }, ctx }) => {
            const updated = await ctx.db.savedList.update({
                where: {
                    userId: ctx.session.user.id,
                    id,
                },
                data: input,
            });

            // if (updated.id !== id || updated.title !== input.title) {
            //     throw new TRPCError({
            //         code: "INTERNAL_SERVER_ERROR",
            //         message: "Data did not sync",
            //     });
            // }
        }),
});
