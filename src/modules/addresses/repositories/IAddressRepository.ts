import Address from "../infra/typeorm/entities/Address";

export default interface IAddressRepository {
  findById(id: string): Promise<Address | undefined>
  findByUser(user_id: string): Promise<Address[] | undefined>
}