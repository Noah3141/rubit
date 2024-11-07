import { z } from "zod";
import { protectedProcedure } from "../../trpc";

const FlagEntryScheme = z.object({
    lemma: z.string(),
    id: z.number(),
    feedback: z.string(),
});
export type FlagEntryForm = z.infer<typeof FlagEntryScheme>;

export const flagEntry = protectedProcedure
    .input(FlagEntryScheme)
    .mutation(async ({ ctx, input }) => {
        console.error(
            `==========\n${input.lemma} - ${input.id} [${ctx.session.user.email}]\n${input.feedback}\n==========`,
        );
    });
