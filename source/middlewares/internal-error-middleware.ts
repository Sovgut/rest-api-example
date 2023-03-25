import {NextFunction, Request, Response} from "express";
import {InternalError} from "../core/errors/internal-error.js";

export function internalErrorMiddleware (error: unknown, _request: Request, response: Response, next: NextFunction) {
    if (error instanceof InternalError) {
        return response.status(error.httpStatusCode).json({ message: error.message, key: error.key })
    }

    next(error)
}