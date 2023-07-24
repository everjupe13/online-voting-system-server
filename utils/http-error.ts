import { Response } from "express"


export interface IHttpErrorResponse {
  error: string,
  description: string,
  status?: false
}

export interface IHttpError {
  (res: Response, options?: IHttpErrorResponse): void
}


export const httpError: IHttpError = (res, options) => {
  const resObject: IHttpErrorResponse = {
    error: options.error || 'UNEXPECTED_ERROR',
    description: options.description || 'Произошла ошибка',
    status: false
  }

  return res.status(Number(status) || 200).json(resObject)
}