import FakeUserRepository from "../repositories/fakes/FakeUserRepository";
import ShowUserService from "./ShowUserService";

let fakeUserRepository: FakeUserRepository
let showUserService: ShowUserService

describe('ShowUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository()
    showUserService = new ShowUserService(fakeUserRepository)
  })

  it('should be able to list all users', async () => {
    const users = await showUserService.execute()

    expect(typeof users).toBe('object')
  })
})