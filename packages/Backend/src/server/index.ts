import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import connectDB from "./utils/prisma";
import cors from "cors";

type CreateContextOptions = Record<string, never>;

const usersSchema = z.object({
  id: z.string(),
  email: z.string().email(),
});

const updateUserSchema = z.object({
  email: z.string().email(),
});

const app = express();
app.use(cors());
const appRouter = router({
  test: publicProcedure.query(async () => {
    return "Hello World";
  }),
  userList: publicProcedure.query(async ({ ctx }: any) => {
    const users = await prisma?.users.findMany();
    return users;
  }),
  createUser: publicProcedure.input(usersSchema).mutation(async (input) => {
    const userInput = input.input;
    const user = await prisma?.users.createMany({
      data: userInput,
    });

    return user;
  }),
  updateUser: publicProcedure
    .input(updateUserSchema)
    .mutation(async (input) => {
      console.log(input,"input ✅✅")
      const userInput = input.input;
      const user = await prisma?.users.updateMany({
        where: {
          email: userInput.email,
        },
        data: {
          email: userInput.email,
        }
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
