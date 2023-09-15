import { Topic } from 'core/entities/Topic/Topic'

export interface TopicRepository {
  getAll(): Promise<Topic[]>
  getById(id: number): Promise<Topic>
  getTopicVotes(): Promise<any>
}