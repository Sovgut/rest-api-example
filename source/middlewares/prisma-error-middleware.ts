import {NextFunction, Request, Response} from "express";
import {PrismaClientValidationError} from "@prisma/client/runtime/library.js";
import {PRISMA_ENTITY_INVALID_BODY} from "../core/constants/error-keys.js";

export function prismaErrorMiddleware (error: unknown, _request: Request, response: Response, next: NextFunction) {
    if (error instanceof PrismaClientValidationError) {
        return response.status(400).json({ message: 'Invalid body for create or update entity', key: PRISMA_ENTITY_INVALID_BODY })
    }

    next(error)
}