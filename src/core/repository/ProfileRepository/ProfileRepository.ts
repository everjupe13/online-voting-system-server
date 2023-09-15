import { Profile } from "core/entities/Profile/Profile";

export interface ProfileRepository {
  getProfile(id: number): Promise<Profile>
}