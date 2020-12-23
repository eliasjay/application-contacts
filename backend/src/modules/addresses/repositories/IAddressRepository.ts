import Address from "../infra/typeorm/entities/Address";

export default interface IAddressRepository {
  findByUser(user_id: string): Promise<Address[] | undefined>
}