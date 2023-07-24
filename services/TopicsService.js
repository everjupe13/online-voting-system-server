import { BaseService } from './BaseService.js'
import { TopicsModel } from '../models/TopicsModel.js'

class TopicsServiceClass extends BaseService {
  constructor(model) {
    super(model)
  }
  async createTopic({ name, description }) {
    const topic = await this.model.create({ name, description })

    return {
      ...topic
    }
  }
  async getTopic({ id }) {
    const topic = await this.model.get({ id: Number(id) })
    return topic
  }
  async getAllTopics() {
    const topics = await this.model.getAll()
    topics.map(topic => {
      return { ...topic, voteFor: 1, voteAgainst: 0 }
    })
    return topics
  }

  withVotes(topics, votesArray, options) {

    function formatVotes() {
      const votesFor = votesArray.reduce((acc, voteData) => {
        return voteData.voteResult === true && voteData.voted ? acc += 1 : acc
      }, 0)
      const votesAgainst = votesArray.reduce((acc, voteData) => {
        return voteData.voteResult === false && voteData.voted ? acc += 1 : acc
      }, 0)

      const votesData = {
        is_user_voted: null,
        user_vote_result: null,

        votes_for: votesFor,
        votes_against: votesAgainst
      }

      if (options.extendUserData) {
        const _userVoteData = options.user && options.user.id
          ? votesArray.find(vote => vote.userId === Number(options.user.id))
          : null

        const isUserVoted = _userVoteData ? _userVoteData.voted : null

        const userVoteResult = _userVoteData && isUserVoted
          ? _userVoteData.voteResult
          : null

        votesData.is_user_voted = isUserVoted
        votesData.user_vote_result = userVoteResult
      }

      return votesData
    }


    return Array.isArray(topics) ? topics.map((topic, topicIdx) => {
      const _votesArray = votesArray.find((_, idx) => idx === topicIdx)

      const votesFor = _votesArray.reduce((acc, voteData) => {
        return voteData.voteResult === true && voteData.voted ? acc += 1 : acc
      }, 0)
      const votesAgainst = _votesArray.reduce((acc, voteData) => {
        return voteData.voteResult === false && voteData.voted ? acc += 1 : acc
      }, 0)


      const votesData = {
        is_user_voted: null,
        user_vote_result: null,

        votes_for: votesFor,
        votes_against: votesAgainst
      }


      if (options.extendUserData) {
        const _userVoteData = options.user && options.user.id
          ? _votesArray.find(vote => vote.userId === Number(options.user.id))
          : null

        const isUserVoted = _userVoteData ? _userVoteData.voted : null

        const userVoteResult = _userVoteData && isUserVoted
          ? _userVoteData.voteResult
          : null

        votesData.is_user_voted = isUserVoted
        votesData.user_vote_result = userVoteResult
      }

      return {
        ...topic,
        ...votesData
      }
    }) : formatVotes()
  }

  updateInfo() {

  }
  deleteUser() {

  }
}

export const TopicsService = new TopicsServiceClass(TopicsModel)
