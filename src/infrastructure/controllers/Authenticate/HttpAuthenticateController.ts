import { AuthenticateService } from 'core/applicationsServices/AuthenticateService/AuthenticateService'
import { SignUpDto } from 'core/repository/AuthenticateRepository/dto/SignUpDto'
import { VerifyDto } from 'core/repository/AuthenticateRepository/dto/VerifyDto'
import { Request, Response } from 'express'

export class HttpAuthenticateController {
  constructor(readonly authenticateService: AuthenticateService) { }

  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      await this.authenticateService.signUp(
        new SignUpDto(email, password)
      )

      res.json({ status: 'success' })
    } catch (e) {
      res.status(400).json('Not found ' + e.message)
    }
  }

  async verify(req: Request, res: Response) {
    const rawToken = req.headers["authorization"]
    const token = rawToken.replace('Bearer ', '')

    if (!token) {
      res.status(400).json({
        error: 'UNAUTHORIZED',
        status: false,
        description: 'Ошибка авторизации'
      })
    }

    await this.authenticateService.verify(
      new VerifyDto(token)
    )
  }
}