import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import connectDB from "./utils/prisma";
import cors from "cors";
import { inferAsyncReturnType } from "@trpc/server";
import superjson from "superjson";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
type CreateContextOptions = Record<string, never>;

const usersSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  // TaskToDo: z.object({
  //   id: z.string(),
  //   tasktitle: z.string(),
  //   status: z.string(),
  //   taskstart: z.coerce.date(),
  //   taskend: z.coerce.date(),
  //   TaskType: z.object({
  //     id: z.string(),
  //     tasktype: z.string(),
  //   }),
  //   AmbitiosGoal: z.object({
  //     id: z.string(),
  //     goaltitle: z.string(),
  //     goalend: z.coerce.date(),
  //   }),
  //   Progress: z.object({
  //     id: z.string(),
  //     progress: z.number(),
  //   }),
  //   OverallProgress: z.object({
  //     id: z.string(),
  //     mindfullness: z.number(),
  //     physical: z.number(),
  //     social: z.number(),
  //     financial: z.number(),
  //   }),

  //   createdAt: z.coerce.date(),
  // }),
});

const app = express();
app.use(cors());
const appRouter = router({
  test: publicProcedure.query(async () => {
    return "Hello World";
  }),
  userList: publicProcedure.query(async ({ ctx }: any) => {
    const users = await prisma?.users.findMany();
    // console.log("ctx.prisma.user.findMany() 🔥🔥🔥🔥🔥🔥🔥",ctx.res )
    return users;
  }),
  createUser: publicProcedure.input(usersSchema).mutation(async (input) => {
    const userInput = input.input;
    console.log(userInput,"userInput 🔥🔥🔥🔥🔥🔥🔥");
    const user = await prisma?.users.createMany({
      data: userInput,
    });
    
    return user;
  }),
});

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    prisma,
  };
};

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    req,
    res,
  };
}; // context
type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(8080, () => {
  connectDB();

  console.log("Server started on port 8080");
});
