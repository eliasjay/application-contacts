import { inject, injectable } from "tsyringe";

import IUserRepository from "../repositories/IUserRepository";
import User from "@modules/users/infra/typeorm/entities/User"

@injectable()
class ShowUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  public async execute(): Promise<User[] | undefined> {
    const users = await this.userRepository.findAll()

    return users
  }
}

export default ShowUserService