import { createTRPCRouter, publicProcedure } from "../../trpc";


export const testRouter = createTRPCRouter({
  testing : publicProcedure.query(async ()=>{
    console.log("in testing 🧪🧪")
    return "Hello World"
  })
})

export type TestRouter = typeof testRouter;