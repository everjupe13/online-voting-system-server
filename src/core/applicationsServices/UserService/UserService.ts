import { UserRepository } from 'core/repository/UserRepository/UserRepository'
import { CreateNewUserDto } from 'core/repository/UserRepository/dto/CreateNewUserDto'
import { User } from 'core/entities/User/User'

export class UserService {
  constructor(readonly userRepository: UserRepository) {}

  async getById(id: number): Promise<User> {
    return this.userRepository.getById(id)
  }

  async getByEmail(email: string): Promise<User> {
    return this.userRepository.getByEmail(email)
  }

  async getAll() {
    return this.userRepository.getAll()
  }

  // async createNewUser(dto: CreateNewUserDto) {
  //   // return this.userRepository.add({ email })
  //   return this.userRepository.add({ email: dto.email })
  // }

  // TODO create more methods with logics


}