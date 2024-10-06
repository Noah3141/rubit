import { createTRPCRouter } from "../../trpc";
import { verbsBelarusianRouter } from "./belarusian";
import { verbsRussianRouter } from "./russian";
import { verbsUkrainianRouter } from "./ukrainian";

export const verbsRouter = createTRPCRouter({
    russian: verbsRussianRouter,
    belarusian: verbsBelarusianRouter,
    ukrainian: verbsUkrainianRouter,
});
