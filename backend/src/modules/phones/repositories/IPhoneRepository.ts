import Phone from "../infra/typeorm/entities/Phone";

export default interface IPhoneRepository {
  findById(id: string): Promise<Phone | undefined>
  findByUser(user_id: string): Promise<Phone[] | undefined>
}