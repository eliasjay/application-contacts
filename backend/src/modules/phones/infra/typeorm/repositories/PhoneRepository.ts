import { getRepository, Repository } from "typeorm";

import IPhoneRepository from "../../../repositories/IPhoneRepository";

import Phone from "../entities/Phone";

class PhoneRepository implements IPhoneRepository {
  private ormRepository: Repository<Phone>

  constructor() {
    this.ormRepository = getRepository(Phone)
  }
  public async findById(id: string): Promise<Phone | undefined> {
    const phone = await this.ormRepository.findOne(id)

    return phone
  }

  public async findByUser(user_id: string): Promise<Phone[] | undefined> {
    const phones = await this.ormRepository.find({
      where:  { user_id }
    })

    return phones
  }
}

export default PhoneRepository