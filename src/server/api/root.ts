import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { listRouter } from "./routers/list";
import { authRouter } from "./routers/auth";
import { generateRouter } from "./routers/generate";
import { verbsRouter } from "./routers/verbs";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    list: listRouter,
    auth: authRouter,
    generate: generateRouter,
    verbs: verbsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
