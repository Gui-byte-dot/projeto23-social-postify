-- CreateTable
CREATE TABLE "publications" (
    "id" SERIAL NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "dateToPublish" DATE NOT NULL,
    "published" BOOLEAN NOT NULL,
    "socialMedia" VARCHAR(50) NOT NULL,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50),
    "password" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(50) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
