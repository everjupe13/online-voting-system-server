import { PrismaClient } from '@prisma/client'


class ORMConnectionClass {
  client: PrismaClient

  constructor() {
    this.client = new PrismaClient()
  }
}

export const ORMConnection = new ORMConnectionClass().client
