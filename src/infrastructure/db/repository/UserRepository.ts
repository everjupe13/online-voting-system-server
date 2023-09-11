
import { User } from 'core/entities/User/User'
import { UserRepository } from 'core/repository/UserRepository/UserRepository'
import { AddUserDto } from 'core/repository/UserRepository/dto/AddUserDto'
import { UpdateUserDto } from 'core/repository/UserRepository/dto/UpdateUserDto'
import { UserMapper } from '../mappers/UserMapper'

import { ORMConnection } from '../ORMConnection'


export class UserRepositoryImplementation implements UserRepository {
  // add(dto: AddUserDto): User {
  //   const entityFromDb = orm.user.add() // prisma client implemetations
  // }

  async getById(id: number): Promise<User> {
    await ORMConnection.$connect()
    const entityFromDb = await ORMConnection.user.findUnique({
      where: { id }
    })
    await ORMConnection.$disconnect()

    const user = UserMapper.toDomain(entityFromDb)
    return Promise.resolve(user)
  }

  async getByEmail(email: string): Promise<User> {
    await ORMConnection.$connect()
    const entityFromDb = await ORMConnection.user.findUnique({
      where: { email }
    })
    await ORMConnection.$disconnect()

    const user = UserMapper.toDomain(entityFromDb)
    return Promise.resolve(user)
  }

  async getAll(): Promise<User[]> {
    await ORMConnection.$connect()
    const entitiesFromDb = await ORMConnection.user.findMany()
    await ORMConnection.$disconnect()

    const users = entitiesFromDb.map(entity => UserMapper.toDomain(entity))
    return Promise.resolve(users)
  }

  // remove(id: string): Boolean {
      
  // }

  // update(dto: UpdateUserDto): User {
      
  // }
}