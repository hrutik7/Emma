import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

import { users } from './db';
import { User } from './types';

export const userRouter = router({
  getUsers: publicProcedure.query(() => {
    console.log("inside get users")
    return users;
  }),
  getUserById: publicProcedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const { input } = req;

      const user = users.find((user) => user.id === input);

      return user;
    }),
  createUser: publicProcedure
    .input(z.object({ name: z.string(),email:z.string().email(),password:z.string().min(10) }))
    .mutation((req) => {
      const { input } = req;

      const user: User = {
        id: `${Math.random()}`,
        name: input.name,
        email: input.email,
        password: input.password,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      users.push(user);

      return user;
    }),
});