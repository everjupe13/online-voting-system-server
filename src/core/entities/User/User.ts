export class User {
  constructor(
    readonly id: number,
    readonly email: string,
    readonly password: string,
    readonly createdAt: string
  ) {}
}