import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Task 1
const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// Task 2
const createNewUser = async (email: string, name?: string) => {
  return await prisma.user.create({ data: { email, name } });
};

// Task 3
const updateUser = async (email: string, input: Prisma.UserUpdateInput) => {
  return await prisma.user.update({ where: { email }, data: input });
};

async function main() {
  // console.log(await getAllUsers());
  // console.log(await createNewUser("s@mail.com"));
  // console.log(await createNewUser("q@mail.com", "Qwerty"));
  // console.log(await updateUser("s@mail.com", { name: "Alice" }));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
