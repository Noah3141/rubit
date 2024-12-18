import { createTRPCRouter } from "../../trpc";
import { flagEntry } from "./flagEntry";
import { getForWord } from "./getForWord";

export const entryRouter = createTRPCRouter({
    flagEntry,
    getForWord,
});
