import { User } from '../../entities/User/User'
import { AddUserDto } from './dto/AddUserDto'
import { UpdateUserDto } from './dto/UpdateUserDto'

export interface UserRepository {
  add(dto: AddUserDto): User
  getById(id: number): User
  getByEmail(email: string): User
  getAll(): User
  remove(id: string): Boolean
  update(dto: UpdateUserDto): User
}
