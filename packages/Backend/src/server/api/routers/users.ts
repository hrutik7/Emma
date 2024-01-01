import {z} from "zod";
import { TRPCError } from "@trpc/server";
import {publicProcedure} from "../../trpc";
import {  Prisma, type PrismaClient } from "@prisma/client";

const usersSchema = z.object({
    id: z.string(),
    email: z.string().email(),
  });
  
  const updateUserSchema = z.object({
    email: z.string().email(),
  });

export async function getUser(){

}