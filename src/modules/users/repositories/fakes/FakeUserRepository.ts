import { uuid } from "uuidv4";

import IUserRepository from "../IUserRepository";

import User from "../../infra/typeorm/entities/User";
import IUserDTO from "../../dtos/IUserDTO";

class UserRepository implements IUserRepository {
  private users: User[] = []
  
  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id)

    return user
  }

  public async findByName(name: string): Promise<User | undefined> {
   const user = this.users.find(user => user.name === name)

    return user
  }

  public async findAll(): Promise<User[] | undefined> {
    return this.users
  }

  public async create(userData: IUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuid() }, userData)

    this.users.push(user)

    return user
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id)

    this.users[findIndex] = user

    return user
  }
}

export default UserRepository