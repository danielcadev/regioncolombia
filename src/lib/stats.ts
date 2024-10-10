import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getActiveUsersCount() {
  return await prisma.user.count({
    where: {
      isActive: true,
      deletedAt: null
    }
  })
}

export async function getTotalProjectsCount() {
  return await prisma.proyectoComunitario.count()
}

export async function getLastProjectCreatedDate() {
  const lastProject = await prisma.proyectoComunitario.findFirst({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return lastProject?.createdAt
}

export async function getProjectGrowth() {
  const fiveMonthsAgo = new Date()
  fiveMonthsAgo.setMonth(fiveMonthsAgo.getMonth() - 5)

  const monthlyProjects = await prisma.proyectoComunitario.groupBy({
    by: ['createdAt'],
    _count: {
      id: true
    },
    where: {
      createdAt: {
        gte: fiveMonthsAgo
      }
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return monthlyProjects.map(item => ({
    month: monthNames[new Date(item.createdAt).getMonth()],
    count: item._count.id
  }))
}

export async function getUserProjects(userId: string) {
  return await prisma.proyectoComunitario.findMany({
    where: {
      authorId: userId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export async function getRecentProjects(limit: number = 5) {
  return await prisma.proyectoComunitario.findMany({
    take: limit,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: {
        select: {
          name: true
        }
      }
    }
  })
}

export async function getUserProjectsCount(userId: string) {
  return await prisma.proyectoComunitario.count({
    where: {
      authorId: userId
    }
  })
}

export async function getTopZones(limit: number = 5) {
  const zones = await prisma.proyectoComunitario.groupBy({
    by: ['zona'],
    _count: {
      id: true
    },
    orderBy: {
      _count: {
        id: 'desc'
      }
    },
    take: limit
  })

  return zones.map(zone => ({
    name: zone.zona,
    count: zone._count.id
  }))
}