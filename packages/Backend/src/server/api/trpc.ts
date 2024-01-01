import { initTRPC ,inferAsyncReturnType} from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
import * as trpcExpress from "@trpc/server/adapters/express";

// created for each request
export const createContext = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    req,
    res,
  };
}; // context
type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create()
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;