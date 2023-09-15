export class Topic {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly createdAt: string,
    readonly votes?: any[]
  ) {}
}