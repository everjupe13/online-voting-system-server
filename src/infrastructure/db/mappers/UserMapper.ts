import { User } from 'src/core/entities/User/User'
import { UserEntity } from 'src/infrastructure/db/entities/UserEntity'


interface DbMapper<D, E> {
  toDomain(entity: E): D
  toEntity(entity: D): E
}

// export class UserMapper implements DbMapper<User, UserEntity> {
//   public toDomain(entity: UserEntity): User {
//     return new User(entity.id, entity.email, entity.password)
//   }

//   public toEntity(domainModel: User): UserEntity {
//     return new UserEntity(domainModel.id, domainModel.email, domainModel.password, new Date())
//   }
// }

export class UserMapper {
  public static toDomain(entity: UserEntity): User {
    return new User(entity.id, entity.email, entity.password, entity.createdAt.toISOString())
  }

  public static toEntity(domainModel: User): UserEntity {
    return new UserEntity(domainModel.id, domainModel.email, domainModel.password, new Date())
  }
}