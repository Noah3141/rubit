import { createTRPCRouter } from "~/server/api/trpc";
import { getRouter } from "./get";
import { update } from "./update";
import { create } from "./create";
import { flagEntry } from "./flagEntry";
// import { createRouter } from "./create";

export const entryRouter = createTRPCRouter({
    get: getRouter,
    update: update,
    flagEntry,
    create: create,
});
