import { getRepository, Repository } from "typeorm";

import IUserRepository from "../../../repositories/IUserRepository";

import User from "../entities/User";
import IUserDTO from "../../../dtos/IUserDTO";

interface IOffset {
  page: number,
  limit: number
}

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }
  
  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id }
    })
    
    return user
  }

  public async findByName(name: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { name }
    })
    
    return user
  }

  public async findAll({ page, limit }: IOffset): Promise<User[] | undefined> {
    const hop = (page - 1) * limit

    const users = await this.ormRepository.find({
      skip: hop,
      take: limit
    })

    return users
  }

  public async create(userData: IUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData)

    await this.ormRepository.save(user)

    return user
  }

  public async save(user: User): Promise<User> {
    return await this.ormRepository.save(user)
  }
}

export default UserRepository