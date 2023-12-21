import { initTRPC } from '@trpc/server'

const t = initTRPC.create()

export const trpc = t;
export const publicProcedure = t.procedure;