import AppError from "@shared/errors/AppError";
import FakeUserRepository from "../repositories/fakes/FakeUserRepository";
import CreateUserService from "./CreateUserService";
import AlterUserService from "./AlterUserService";
import User from "../infra/typeorm/entities/User";

let fakeUserRepository: FakeUserRepository
let createUserService: CreateUserService
let alterUserService: AlterUserService

describe('AlterUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository()
    createUserService = new CreateUserService(fakeUserRepository)
    alterUserService = new AlterUserService(fakeUserRepository)
  })

  it('should be able to update an user', async () => {
    const user = await createUserService.execute({
      name: 'José',
      birth_date: new Date(),
      cpf: '123.456.789-10',
      rg: '12.345.678-9',
      phones: [
        {phone_number: "14996023246", type: "home"}
      ],
      addresses: [{
        street: "Rua Benjamin Constant, 246",
        city: "Quintana",
        state: "SP",
        country: "Brazil",
        zipcode: "17670000",
        type: "home"
      }],
      facebook: 'http://www.facebook.com/jose/',
      linkedin: 'https://www.linkedin.com/in/jose/',
      twitter: 'https://twitter.com/jose',
      instagram: 'https://www.instagram.com/jose/',
    })

    user.rg = '99.999.999-99'
    
    const updatedUser = await alterUserService.execute(user)
    
    expect(updatedUser.rg).toEqual('99.999.999-99')
  })
})