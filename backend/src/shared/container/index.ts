import { container } from "tsyringe";

import IAddressRepository from '@modules/addresses/repositories/IAddressRepository'
import AddressRepository from '@modules/addresses/infra/typeorm/repositories/AddressRepository'

import IPhoneRepository from '@modules/phones/repositories/IPhoneRepository'
import PhoneRepository from '@modules/phones/infra/typeorm/repositories/PhoneRepository'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository'

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository
)

container.registerSingleton<IPhoneRepository>(
  'PhoneRepository',
  PhoneRepository
)

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)