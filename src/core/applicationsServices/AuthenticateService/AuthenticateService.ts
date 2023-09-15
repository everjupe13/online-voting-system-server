import { User } from 'core/entities/User/User'
import { AuthenticateRepository } from 'core/repository/AuthenticateRepository/AuthenticateRepository'
import { SignUpDto } from 'core/repository/AuthenticateRepository/dto/SignUpDto'
import { VerifyDto } from 'core/repository/AuthenticateRepository/dto/VerifyDto'
import jwt, { JwtPayload } from 'jsonwebtoken'

export class AuthenticateService {
  constructor (readonly authenticateRepository: AuthenticateRepository) {}

  async signUp(dto: SignUpDto) {
    this.authenticateRepository.signUp(dto)
  }

  async verify(dto: VerifyDto): Promise<User> {
    const token = dto.token
    const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload

    return this.authenticateRepository.authenticate(dto)
  }
}