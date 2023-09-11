import { ProfileService } from 'core/applicationsServices/ProfileService/ProfileService'
import { Request, Response, NextFunction } from 'express'


export class HttpProfileController {
  constructor(readonly profileService: ProfileService) { }

  async getUserInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body
      const profile = await this.profileService.getByUserId(id)

      res.json({ status: true, data: profile })
    } catch (e) {
      res.status(400).json('Not found ' + e.message)
    }
  }
}
