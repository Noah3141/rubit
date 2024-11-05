import { createTRPCRouter } from "../../trpc";
import { flagEntry } from "./flagEntry";

export const entryRouter = createTRPCRouter({
    flagEntry,
});
