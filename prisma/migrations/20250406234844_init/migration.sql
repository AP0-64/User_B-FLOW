-- CreateTable
CREATE TABLE "usertable" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "mail" VARCHAR(150) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "usertable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usertable_mail_key" ON "usertable"("mail");
