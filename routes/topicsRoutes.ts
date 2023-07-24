import express from 'express'
import { httpError } from '../utils/http-error'
import { requireAuth, checkAuth } from '../middleware/requireAuth'
import { TopicsService } from '../services/TopicsService.js'
import { VoteService } from '../services/VoteService'
import { ExtendedRequest } from '../types/ExtendedHTTPRequest.types'


const router = express.Router()


router.post('/topics/create', requireAuth, async (req, res) => {
  const { name, description } = req.body

  const createdTopic = await TopicsService.createTopic({ name, description })
  if (!createdTopic) {
    return httpError(res)
  }

  return res.status(200).json({ status: true, topic: createdTopic })
})

router.get('/topics/search', checkAuth, async (req: ExtendedRequest, res) => {
  const topics = await TopicsService.getAllTopics()

  if (!Array.isArray(topics)) {
    return httpError(res, {
      error: 'USER_UNEXIST',
      description: 'Неверные данные пользователя'
    })
  }

  const topicsVotes = await VoteService.getTopicVotes({ topics })
  const extendedTopics = TopicsService.withVotes(topics, topicsVotes, { extendUserData: true, user: req.user })

  return res.status(200).json({ status: true, topics: extendedTopics })
})

router.get('/topics/search/:id', checkAuth, async (req: ExtendedRequest, res) => {
  if (!req.params.id) {
    return httpError(res, {
      error: 'INVALID_PARAMETERS',
      description: 'Неверные данные'
    })
  }

  const topic = await TopicsService.getTopic({ id: req.params.id })
  if (!topic && Object.keys(topic || {})?.length) {
    return httpError(res)
  }

  const topicVotes = await VoteService.getTopicVotes({ topicId: Number(req.params.id) })
  const votesData = TopicsService.withVotes(topic, topicVotes, { extendUserData: true, user: req.user })

  const extendedTopic = {
    ...topic,
    ...votesData
  }

  return res.status(200).json({ status: true, topic: extendedTopic })
})

export { router as topicsRoutes }
