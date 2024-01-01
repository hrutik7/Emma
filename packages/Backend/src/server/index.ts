import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "./trpc";
import express from "express";

import * as trpcExpress from "@trpc/server/adapters/express";
import connectDB from "./utils/prisma";
import cors from "cors";
import { createContext } from "./trpc";
import { testRouter } from "./api/routers/example";
import {appRouter} from "./api/routers";

const usersSchema = z.object({
  id: z.string(),
  email: z.string().email(),
});

const updateUserSchema = z.object({
  email: z.string().email(),
});

const app = express();
app.use(cors());


app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext:createContext,
  })
);

app.listen(8080, () => {
  connectDB();

  console.log("Server started on port 8080");
});
export type AppRouter = typeof appRouter;