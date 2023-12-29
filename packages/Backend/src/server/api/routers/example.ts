import {z} from "zod";
import {publicProcedure, createTRPCRouter} from "../trpc";


const idSchema = z.object({ id: z.string() });

const userSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(10)
    });

const userUpdateSchema = z.object({
    id:z.string(),
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(10)
    });


export const exampleRouter = createTRPCRouter({
    getAll:publicProcedure.query(async ({ctx}:any) => {
        return ctx.prisma.user.findMany();
    }),
    getOne: publicProcedure
    .input(idSchema)
    .query(({ input, ctx }) => {
      return ctx.prisma.users.findUnique({
        where: idSchema.parse(input),
      });
    }),

    create: publicProcedure
    .input(userSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.users.create({
        data: userSchema.parse(input),
      });
    }),

    update: publicProcedure
    .input(userUpdateSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.users.update({
        where: idSchema.parse(input),
        data: userUpdateSchema.parse(input),
      });
    }),

    delete: publicProcedure
    .input(idSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.users.delete({
        where: idSchema.parse(input),
      });
    }),

});


export type ExampleRouter = typeof exampleRouter;