import { User } from "@prisma/client"

export class UserEntity implements User {
  constructor(
    public readonly id: number,
    readonly email: string,
    readonly password: string,
    readonly createdAt: Date,
  ) {}
}