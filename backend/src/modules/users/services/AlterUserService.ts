import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import IUserRepository from "../repositories/IUserRepository";
import User from "@modules/users/infra/typeorm/entities/User"

interface IRequest {
  id: string
  name?: string
  birth_date?: Date
  cpf?: string
  rg?: string
  phones?: any[]
  addresses?: any[]
  facebook?: string
  linkedin?: string
  twitter?: string
  instagram?: string
}

@injectable()
class AlterUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) { }

  public async execute({
    id,
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
  }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new AppError('User does not exists.')
    }

    user.name = name
    user.birth_date = new Date(birth_date)
    user.cpf = cpf
    user.rg = rg
    user.phones = phones
    user.addresses = addresses
    user.facebook = facebook
    user.linkedin = linkedin
    user.twitter = twitter
    user.instagram = instagram

    await this.userRepository.save(user)

    return user
  }
}

export default AlterUserService