import {createTRPCRouter, t} from '../../trpc'
import { testRouter } from './example'
import {userRouter} from './users'
export const appRouter = t.router({
    test : testRouter,
    user : userRouter
})

export type AppRouter = typeof appRouter