import { UserRepository } from '../../repository/UserRepository/UserRepository'
import { CreateNewUserDto } from '../../repository/UserRepository/dto/CreateNewUserDto'


export class UserService {
  constructor(readonly userRepository: UserRepository) {}

  async getAll() {
    return this.userRepository.getAll()
  }

  async getById(id: number) {
    return this.userRepository.getById(id)
  }

  async getByEmail(email: string) {
    return this.userRepository.getByEmail(email)
  }

  async createNewUser(dto: CreateNewUserDto) {
    // return this.userRepository.add({ email })
    return this.userRepository.add({ email: dto.email })
  }

  // TODO create more methods with logics


}