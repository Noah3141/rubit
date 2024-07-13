import { createTRPCRouter, publicProcedure } from "../../trpc";
import { salt } from "~/server/auth";
import crypto from "crypto";
import { TRPCError } from "@trpc/server";
import { signUpForm } from "~/types/auth";

export const authRouter = createTRPCRouter({
    signUp: publicProcedure
        .input(signUpForm)
        .mutation(async ({ ctx, input }) => {
            const usersWithThatEmail = await ctx.db.user.count({
                where: {
                    email: input.email,
                },
            });

            if (usersWithThatEmail === 0) {
                const encryptedPassword = crypto
                    .createHash("sha256")
                    .update(salt + input.password, "utf8")
                    .digest("base64");

                await ctx.db.user.create({
                    data: {
                        email: input.email,
                        password: encryptedPassword,
                    },
                });
            } else {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "An account with that email already exists!",
                });
            }
        }),
});
