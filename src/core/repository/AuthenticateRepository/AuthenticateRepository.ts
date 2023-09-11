import { Authenticate } from 'core/entities/Authenticate/Authenticate'
import { SignUpDto } from './dto/SignUpDto'
import { VerifyDto } from './dto/VerifyDto'
import { User } from 'core/entities/User/User'

export interface AuthenticateRepository {
  signUp(dto: SignUpDto): User
  authenticate(dto: VerifyDto): User
}