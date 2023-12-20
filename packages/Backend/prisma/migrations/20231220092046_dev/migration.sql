-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progress" (
    "id" TEXT NOT NULL,
    "progress" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OverallProgress" (
    "id" TEXT NOT NULL,
    "mindfullness" INTEGER NOT NULL,
    "physical" INTEGER NOT NULL,
    "social" INTEGER NOT NULL,
    "financial" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "OverallProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AmbitiousGoal" (
    "id" TEXT NOT NULL,
    "goaltitle" TEXT NOT NULL,
    "goalend" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "AmbitiousGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskTodo" (
    "id" TEXT NOT NULL,
    "tasktitle" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "taskstart" TIMESTAMP(3) NOT NULL,
    "taskend" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "TaskTodo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskType" (
    "id" TEXT NOT NULL,
    "tasktype" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskTodoId" TEXT NOT NULL,

    CONSTRAINT "TaskType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waitingList" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "waitingList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Progress_id_key" ON "Progress"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OverallProgress_id_key" ON "OverallProgress"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AmbitiousGoal_id_key" ON "AmbitiousGoal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TaskTodo_id_key" ON "TaskTodo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TaskType_id_key" ON "TaskType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "waitingList_id_key" ON "waitingList"("id");

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OverallProgress" ADD CONSTRAINT "OverallProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmbitiousGoal" ADD CONSTRAINT "AmbitiousGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskTodo" ADD CONSTRAINT "TaskTodo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskType" ADD CONSTRAINT "TaskType_taskTodoId_fkey" FOREIGN KEY ("taskTodoId") REFERENCES "TaskTodo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
