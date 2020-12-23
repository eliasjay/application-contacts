import { getRepository, Repository } from "typeorm";

import IAddressRepository from "../../../repositories/IAddressRepository";

import Address from "../entities/Address";

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>

  constructor() {
    this.ormRepository = getRepository(Address)
  }
  
  public async findByUser(user_id: string): Promise<Address[] | undefined> {
    const addresses = await this.ormRepository.find({
      where: { user_id }
    })

    return addresses
  }
}

export default AddressRepository