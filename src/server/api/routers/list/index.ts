import { createTRPCRouter } from "../../trpc";
import { listBelarusianRouter } from "./belarusian";
import { listRussianRouter } from "./russian";
import { listUkrainianRouter } from "./ukrainian";

export const listRouter = createTRPCRouter({
    russian: listRussianRouter,
    belarusian: listBelarusianRouter,
    ukrainian: listUkrainianRouter,
});
