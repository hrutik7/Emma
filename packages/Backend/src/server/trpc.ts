import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import {
  getAuth,
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
import * as trpcExpress from "@trpc/server/adapters/express";
import { prisma } from "./db";
interface AuthContext {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

export const createContextInner = async ({ auth }: AuthContext) => {
  return {
    auth,
    prisma,
  };
};
// created for each request
export const createContext = async (opts: CreateNextContextOptions) => {
  return createContextInner({ auth: getAuth(opts.req) });
}; // context
type Context = inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().create();
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth.userId) {
    throw new Error("Not authenticated");
  }
  return next({
    ctx: {
      auth: ctx.auth,
    },
  });
});
export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(isAuthed);
