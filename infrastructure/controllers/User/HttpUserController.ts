import { UserService } from '../../../core/applicationsServices/UserService/UserService'
import { CreateNewUserDto } from '../../../core/repository/UserRepository/dto/CreateNewUserDto'
import { Request, Response } from 'express'

export class HttpUserController {
  constructor(readonly userService: UserService) {}

  async createNewUser(req: Request, res: Response) {
    try {
      const { email } = req.body
      await this.userService.createNewUser(new CreateNewUserDto(email))

      res.json('success')
    } catch (e) {
      res.status(400).json('Not found ' + e.message)
    }
  }
}