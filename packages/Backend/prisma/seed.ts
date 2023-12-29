import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.users.create({
    data: {
      id: "1w2",
      email: "hriwtikkusmthekar7@gmail.com",
      TaskTodo: {
        create: {
          id: "1a",
          tasktitle: "Task 1",
          taskstart: "2021-06-01T00:00:00.000Z",
          taskend: "2021-06-01T00:00:00.000Z",
          status: "DONE",
        },
      },
      AmbitiousGoal: {
        create: {
          id: "12",
          goaltitle: "Goal 1",
          goalend: "2021-06-01T00:00:00.000Z",
        },
      },
      Progress: {
        create: {
          id: "w1",
          progress: 0,
        },
      },
      OverallProgress: {
        create: {
          id: "21",
          mindfullness: 0,
          physical: 0,
          social: 0,
          financial: 0,
        },
      },
    },
    select: {
      id: true,
    },
  });

  console.log(user,"user 👥");
}

main()
