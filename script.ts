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

// Task 5
const createPost = async (title: string) => {
  return await prisma.post.create({ data: { title } });
};

// Task 6
const connectPostWithUser = async (postId: number, authorEmail: string) => {
  return prisma.post.update({
    where: { id: postId },
    data: { author: { connect: { email: authorEmail } } },
  });
};

// Task 7
const getUserByUniqueField = async ({
  id,
  email,
}: {
  id?: number;
  email?: string;
}) => {
  return prisma.user.findUnique({ where: { email, id } });
};

// Task 8
const getUserSubfields = async () => {
  return await prisma.user.findMany({ select: { id: true, name: true } });
};

// Task 9
const getPostWithAuthor = async (id: number) => {
  return await prisma.post.findFirst({
    where: { id },
    include: { author: true },
  });
};

// Task 10
const createUserWithPost = async (
  email: string,
  post: Prisma.PostCreateInput
) => {
  return await prisma.user.create({ data: { email, posts: { create: post } } });
};

const getUserWithSelectedFirstLetterInName = async (letter: string) => {
  return await prisma.user.findMany({
    where: { name: { startsWith: letter } },
  });
};

const getUserWithPagination = (page = 1, by = 2) => {
  const skip = page * by;
  return prisma.user.findMany({ skip, take: by });
};

async function main() {
  // console.log(await getAllUsers());
  // console.log(await createNewUser("s@mail.com"));
  // console.log(await createNewUser("q@mail.com", "Qwerty"));
  // console.log(await updateUser("s@mail.com", { name: "Alice" }));
  // console.log(await createPost("Hello World"));
  // console.log(await connectPostWithUser(1, "s@mail.com"));
  // console.log(await getUserByUniqueField({ id: 1 }));
  // console.log(await getUserByUniqueField({ email: "s@mail.com" }));
  // console.log(await getUserSubfields());
  // console.log(await getPostWithAuthor(1));
  // console.log(await createUserWithPost("v@mail.com", { title: "V Post" }));
  // console.log(await getUserWithSelectedFirstLetterInName("a"));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
