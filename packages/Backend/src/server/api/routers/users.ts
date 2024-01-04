import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { Prisma, type PrismaClient } from "@prisma/client";

const usersSchema = z.object({
  id: z.string(),
  email: z.string().email(),
});

const updateUserSchema = z.object({
  email: z.string().email(),
});

const getUsers = async () => {
  const users = await prisma?.users.findMany();
  return users;
};

export const userRouter = createTRPCRouter({
  users: publicProcedure.query(async () => {
    const users = await prisma?.users.findMany();
    return users;
  }),
});
