import { NextFunction, Response } from 'express'
import { UserService } from '../services/UserService'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { ExtendedRequest } from '../types/ExtendedHTTPRequest.types'




export const requireAuth = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) {
    return res.status(200).json({
      error: 'UNAUTHORIZED',
      status: false,
      description: 'Ошибка авторизации'
    })
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload
  const user = await UserService.getUser({ id: payload.userId })

  if (!user) {
    return res.status(200).json({
      error: 'UNAUTHORIZED',
      status: false,
      description: 'Ошибка авторизации'
    })
  }

  // Attach the user object to the request object for future use
  req.user = user
  next()
}

export const checkAuth = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) {
    req.user = null
    return next()
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload
  const user = await UserService.getUser({ id: payload.userId })

  if (!user) {
    return res.status(200).json({
      error: 'UNAUTHORIZED',
      status: false,
      description: 'Ошибка авторизации'
    })
  }

  delete user.password
  // Attach the user object to the request object for future use
  req.user = user
  next()
}
