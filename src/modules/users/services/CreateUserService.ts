import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import IUserRepository from "../repositories/IUserRepository";
import User from "@modules/users/infra/typeorm/entities/User"
import IUserDTO from "../dtos/IUserDTO";

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  public async execute({
    name,
    birth_date,
    cpf,
    rg,
    phones,
    addresses,
    facebook,
    linkedin,
    twitter,
    instagram
  }: IUserDTO): Promise<User> {
    const checkUserName = this.userRepository.findByName(name)

    if (checkUserName) {
      throw new AppError('User name already exists.');
    }

    const user = await this.userRepository.create({
      name,
      birth_date: new Date(birth_date),
      cpf,
      rg,
      phones,
      addresses,
      facebook,
      linkedin,
      twitter,
      instagram
    })

    return user
  }
}

export default CreateUserService