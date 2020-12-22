import IPhoneDTO from "@modules/phones/dtos/IPhoneDTO";
import IAddressDTO from "@modules/addresses/dtos/IAddressDTO";

export default interface IUserDTO {
  name: string
  birth_date: Date
  cpf: string
  rg: string
  phones: IPhoneDTO[]
  addresses: IAddressDTO[]
  facebook: string
  linkedin: string
  twitter: string
  instagram: string
}