import { NextFunction, Router, Request, Response } from 'express'
import { HttpAuthenticateController } from 'infrastructure/controllers/Authenticate/HttpAuthenticateController'
import { HttpProfileController } from 'infrastructure/controllers/Profile/HttpProfileController'
import { HttpUserController } from 'infrastructure/controllers/User/HttpUserController'
import { AuthenticateService } from 'core/applicationsServices/AuthenticateService/AuthenticateService'
import { AuthenticateRepositoryImplementation } from 'infrastructure/db/repository/AuthenticateRepository'
import { UserService } from 'core/applicationsServices/UserService/UserService'
import { UserRepositoryImplementation } from 'infrastructure/db/repository/UserRepository'
import { ProfileService } from 'core/applicationsServices/ProfileService/ProfileService'
import { ProfileRepositoryImplementation } from 'infrastructure/db/repository/ProfileRepository'

const router = Router()


// const httpAuthenticateController = new HttpAuthenticateController(
//   new AuthenticateService(
//     new AuthenticateRepositoryImplementation()
//   )
// )

const httpUserController = new HttpUserController(
  new UserService(
    new UserRepositoryImplementation()
  )
)

const httpProfileController = new HttpProfileController(
  new ProfileService(
    new ProfileRepositoryImplementation()
  )
)


router.route('/v1/profile') // TODO change to get method
  .post(
    (req: Request, res: Response, next: NextFunction) => httpProfileController.getUserInfo(req, res, next)
  )

router.route('/v1/profile/show')
  .post(
    (req: Request, res: Response, next: NextFunction) => httpProfileController.getUserInfo(req, res, next)
  )



router.route('/v1/user')
  .post(
    (req: Request, res: Response, next: NextFunction) => httpUserController.getById(req, res)
  )

router.route('/v1/user/all')
  .post(
    (req: Request, res: Response, next: NextFunction) => httpUserController.getAll(req, res)
  )

router.route('/v1/user/email')
  .post(
    (req: Request, res: Response, next: NextFunction) => httpUserController.getByEmail(req, res)
  )

// router.route('/v1/user/all')
  // .get(getUserFn)


// router.route('/v1/auth/sign')
//   .post(httpAuthenticateController.create) // email, password => token

// router.route('/v1/auth/verify')
//   .post(httpAuthenticateController.verify) // token => email, password


export { router }