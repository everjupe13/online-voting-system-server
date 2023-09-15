import { User } from '../../entities/User/User'
import { AddUserDto } from './dto/AddUserDto'
import { UpdateUserDto } from './dto/UpdateUserDto'

export interface UserRepository {
  // add(dto: AddUserDto): User
  getById(id: number): Promise<User>
  getByEmail(email: string): Promise<User>
  getAll(): Promise<User[]>
  // remove(id: string): Boolean
  // update(dto: UpdateUserDto): User
}
