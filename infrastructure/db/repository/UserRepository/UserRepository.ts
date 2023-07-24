import { User } from "../../../../core/entities/User/User";
import { UserRepository } from "../../../../core/repository/UserRepository/UserRepository";
import { AddUserDto } from "../../../../core/repository/UserRepository/dto/AddUserDto";

export class UserRepositoryImplementation implements UserRepository {
  add(dto: AddUserDto): User {
    const entityFromDb = orm.users.add() // prisma client implemetations
  }
}