import { PrismaClient } from '@prisma/client'
import { User } from 'core/entities/User/User'
import { UserMapper } from '../mappers/UserMapper'
import { ProfileRepository } from 'core/repository/ProfileRepository/ProfileRepository'
import { Profile } from 'core/entities/Profile/Profile'


export class ProfileRepositoryImplementation implements ProfileRepository {
  async getProfile(id: number): Promise<Profile> {
    const prismaClient = new PrismaClient()
    const entityFromDb = await prismaClient.profile.findUnique({
      where: { userId: id }
    })

    // TODO add mapper
    prismaClient.$disconnect()

    // const profile = UserMapper.toDomain(entityFromDb)
    return Promise.resolve(entityFromDb)
  }
}
