import { createTRPCRouter } from "~/server/api/trpc";
import { byForm } from "./byForm";

export const getRouter = createTRPCRouter({
    byForm,
});
