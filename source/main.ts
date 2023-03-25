import express from 'express'
import cors from 'cors'
import helmet from "helmet";
import router from "./router.js";
import {onServerStarted} from "./core/callbacks.js";
import {logErrorMiddleware} from "./middlewares/log-error-middleware.js";
import {internalErrorMiddleware} from "./middlewares/internal-error-middleware.js";
import {errorMiddleware} from "./middlewares/error-middleware.js";
import {prismaErrorMiddleware} from "./middlewares/prisma-error-middleware.js";
import {notFoundMiddleware} from "./middlewares/not-found-middleware.js";

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api', router)
server.use(logErrorMiddleware)
server.use(prismaErrorMiddleware)
server.use(internalErrorMiddleware)
server.use(errorMiddleware)
server.use(notFoundMiddleware)

server.listen(8080, async () => await onServerStarted(server))

export default server
