import { createTRPCRouter } from "../../trpc";
import { listBelarusianRouter } from "./belarusian";
import { listRussianRouter } from "./russian";

export const listRouter = createTRPCRouter({
    russian: listRussianRouter,
    belarusian: listBelarusianRouter,
});
