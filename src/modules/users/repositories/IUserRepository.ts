import User from "../infra/typeorm/entities/User";
import IUserDTO from "../dtos/IUserDTO";

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>
  findByName(name: string): Promise<User | undefined>
  findAll(): Promise<User[] | undefined>
  create(data: IUserDTO): Promise<User>
  save(user: User): Promise<User>
}