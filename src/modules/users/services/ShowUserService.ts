import { inject, injectable } from "tsyringe";

import IUserRepository from "../repositories/IUserRepository";
import User from "@modules/users/infra/typeorm/entities/User"

interface IOffset {
  page: number,
  limit: number
}

@injectable()
class ShowUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  public async execute({ page, limit }: IOffset): Promise<User[] | undefined> {
    const users = await this.userRepository.findAll({ page, limit })

    return users
  }
}

export default ShowUserService