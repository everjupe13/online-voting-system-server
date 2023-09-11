import { Authenticate } from "core/entities/Authenticate/Authenticate";
import { User } from "core/entities/User/User";
import { AuthenticateRepository } from "core/repository/AuthenticateRepository/AuthenticateRepository";
import { VerifyDto } from "core/repository/AuthenticateRepository/dto/VerifyDto";
import jwt, { JwtPayload } from 'jsonwebtoken'


export class AuthenticateRepositoryImplementation implements AuthenticateRepository {
  signUp(): User {}

  authenticate(dto: VerifyDto): User {
    const token = dto.token
    const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload

    return new User(1, 'vasya@pupkin.mail.ru', 'sdsd')
  }
}
