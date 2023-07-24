export class User {
  constructor(
    readonly id: number,
    readonly email: number,
    readonly password: number,
    readonly votes: any[],
    readonly stars: any[],
    readonly profile: any
  ) {}
}