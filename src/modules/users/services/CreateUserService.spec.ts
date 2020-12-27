import AppError from "@shared/errors/AppError";
import FakeUserRepository from "../repositories/fakes/FakeUserRepository";
import CreateUserService from "./CreateUserService";

let fakeUserRepository: FakeUserRepository
let createUserService: CreateUserService

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository()
    createUserService = new CreateUserService(fakeUserRepository)
  })

  it('should be able to create a new user', async () => {
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

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a new user with same name', async () => {
    await createUserService.execute({
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

    expect(
      createUserService.execute({
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
    })).rejects.toBeInstanceOf(AppError)
  })
})