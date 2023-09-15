import { UserService } from 'core/applicationsServices/UserService/UserService'
import { CreateNewUserDto } from 'core/repository/UserRepository/dto/CreateNewUserDto'
import { Request, Response } from 'express'

export class HttpUserController {
  constructor(readonly userService: UserService) { }

  // async createNewUser(req: Request, res: Response) {
  //   try {
  //     const { email } = req.body
  //     await this.userService.createNewUser(new CreateNewUserDto(email))

  //     res.json('success')
  //   } catch (e) {
  //     res.status(400).json('Not found ' + e.message)
  //   }
  // }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.body
      const user = await this.userService.getById(id)

      res.json({ status: true, data: user })
    } catch (e) {
      res.status(400).json('Not found ' + e.message)
    }
  }

  async getByEmail(req: Request, res: Response) {
    try {
      const { email } = req.body
      const user = await this.userService.getByEmail(email)

      res.json({ status: true, data: user })
    } catch (e) {
      res.status(400).json('Not found ' + e.message)
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await this.userService.getAll()

      res.json({ status: true, data: users })
    } catch (e) {
      res.status(400).json('Not found ' + e.message)
    }
  }
}