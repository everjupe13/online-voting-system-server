import { Profile } from 'core/entities/Profile/Profile'
import { ProfileRepository } from 'core/repository/ProfileRepository/ProfileRepository'

export class ProfileService {
  constructor(readonly profileRepository: ProfileRepository) {}

  getByUserId(id: string): Promise<Profile> {
    return this.profileRepository.getProfile(Number(id))
  }
}
