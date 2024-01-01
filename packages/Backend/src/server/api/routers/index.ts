import {createTRPCRouter, t} from '../../trpc'
import { testRouter } from './example'

export const appRouter = t.router({
    test : testRouter
})

export type AppRouter = typeof appRouter