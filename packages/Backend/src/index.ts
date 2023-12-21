
import { z } from 'zod';
import { publicProcedure, router } from './trpc';
 import { createHTTPServer } from '@trpc/server/adapters/standalone'
const appRouter = router({
  userList: publicProcedure
    .query(async () => {
        return [{ id: '1', name: 'John' }];
    }),
  createUser:publicProcedure.input(z.object({
    name:z.string(),
    email:z.string().email(),
    
  })).mutation(async(opts)=>{
        const username = opts.input.name
        const mail =opts.input.email
         
        

        return {username , mail }
  })
  
});


const server = createHTTPServer({
    router: appRouter,
  });
   
  server.listen(3000);