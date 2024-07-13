import { createTRPCRouter } from "../../trpc";
import { generateRussianRouter } from "./russian";

export const generateRouter = createTRPCRouter({
    russian: generateRussianRouter,
});
