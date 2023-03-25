import {NextFunction, Request, Response} from "express";
import {Logger} from "../core/logger.js";

export function logErrorMiddleware (error: unknown, request: Request, _response: Response, next: NextFunction) {
    const logger = new Logger('LogErrorMiddleware')

    logger.error(`path: ${request.method.toUpperCase()} ${request.path}`)
    logger.error(`params: ${JSON.stringify(request.params)}`)
    logger.error(`query: ${JSON.stringify(request.query)}`)
    logger.error(`body: ${JSON.stringify(request.body)}`)
    logger.error(`authorized: ${!!request.headers.authorization}`)
    logger.error(`content-type: ${request.headers["content-type"]}`)
    logger.error(error)

    next(error)
}