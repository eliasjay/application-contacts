import Phone from "../infra/typeorm/entities/Phone";

export default interface IPhoneRepository {
  findByUser(user_id: string): Promise<Phone[] | undefined>
}