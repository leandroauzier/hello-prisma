import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
// CREATE
//   const user = await prisma.user.create({
//       data:{
//           name: "Alice",
//           email: "alice@prisma.io",
//       },
//       console.log(user)
//   })
// READ
//    const users = await prisma.user.findMany()
//    console.log(users)
// CREATE WITH RELATIONSHIP
// const user = await prisma.user.create({
//     data: {
//       name: 'Bob',
//       email: 'bob@prisma.io',
//       posts: {
//         create: {
//           title: 'Hello World',
//         },
//       },
//     },
//   })
//   console.log(user)
//READ WITH INCLUDE POSTS
const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })