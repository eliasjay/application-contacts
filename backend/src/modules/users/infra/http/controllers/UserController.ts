import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateUserService from "../../../services/CreateUserService"
import AlterUserService from "../../../services/AlterUserService"
import ShowUserService from "../../../services/ShowUserService"

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      birth_date,
      cpf,
      rg,
      phones,
      addresses,
      facebook,
      linkedin,
      twitter,
      instagram
    } = request.body

    const createUserService = container.resolve(CreateUserService)

    const user = await createUserService.execute({
      name,
      birth_date,
      cpf,
      rg,
      phones,
      addresses,
      facebook,
      linkedin,
      twitter,
      instagram
    })

    return response.json(user)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      id,
      name,
      birth_date,
      cpf,
      rg,
      phones,
      addresses,
      facebook,
      linkedin,
      twitter,
      instagram
    } = request.body

    const alterUserService = container.resolve(AlterUserService)

    const user = await alterUserService.execute({
      id,
      name,
      birth_date,
      cpf,
      rg,
      phones,
      addresses,
      facebook,
      linkedin,
      twitter,
      instagram
    })

    return response.json(user)
  }
  
  public async show(request: Request, response: Response): Promise<Response> {
    const showUserService = container.resolve(ShowUserService)

    const users = await showUserService.execute()

    return response.json(users)
  }
}

export default UserController