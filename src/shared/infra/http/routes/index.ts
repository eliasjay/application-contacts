import { Router } from 'express'
import userRouter from '@modules/users/infra/http/routes/user.routes'

import swagger from "swagger-ui-express";
import swagger_document from "@shared/docs/swagger.json"

const routes = Router()

routes.use('/users', userRouter)

routes.use('/swagger', swagger.serve, swagger.setup(swagger_document))
  
export default routes