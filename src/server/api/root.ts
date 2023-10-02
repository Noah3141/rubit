import { createTRPCRouter } from "~/server/api/trpc";
import { knownWordsRouter } from "./routers/knownWords";
import { savedListsRouter } from "./routers/vocabLists";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    knownWords: knownWordsRouter,
    savedLists: savedListsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
