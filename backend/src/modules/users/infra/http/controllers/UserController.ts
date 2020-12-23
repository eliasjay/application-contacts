import { Request, Response } from "express";
import { container } from "tsyringe";

import IUserDTO from "@modules/users/dtos/IUserDTO";

import CreateUserService from "../../../services/CreateUserService"
// import AlterUserService from "../../../services/AlterUserService"
// import ShowUserService from "../../../services/ShowUserService"

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
    return response.json({ message: "update" })
  }
  
  public async show(request: Request, response: Response): Promise<Response> {
    return response.json({ message: "save" })
  }
}

export default UserController