// En un archivo separado, por ejemplo, scripts/checkUserRole.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkUserRole(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, role: true }
  })
  console.log("User data:", user)
  await prisma.$disconnect()
}

checkUserRole('daniel.ca.pe207@gmail.com')
  .catch(console.error)