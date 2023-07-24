import { VoteService } from '../services/VoteService'
import { requireAuth } from '../middleware/requireAuth'
import express, { Response, Request } from 'express'
import { ExtendedRequest } from '../types/ExtendedHTTPRequest.types'


const router = express.Router()


router.post('/vote/topic/:id', requireAuth, async (req: ExtendedRequest, res: Response) => {
  if (!req.params.id) {
    return res.status(200).json({
      error: 'INVALID_PARAMETERS',
      status: false,
      description: 'Неверные данные'
    })
  }

  const user = req.user
  const voted = await VoteService.vote({
    topicId: req.params.id,
    userId: user.id,
    voteResult: req.body.voteResult
  })

  if (voted) {
    return res.status(200).json({ status: true, voted: true })
  }

  return res.status(200).json({
    error: 'INVALID_PARAMETERS',
    status: false,
    description: 'Неверные данные'
  })

})

export { router as votesRoutes }
