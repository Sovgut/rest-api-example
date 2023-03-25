import {NextFunction, Request, Response} from "express";
import {ENDPOINT_NOT_FOUND} from "../core/constants/error-keys.js";

export function notFoundMiddleware (_request: Request, response: Response, _next: NextFunction) {
    return response.status(404).json({ message: 'Endpoint not found', key: ENDPOINT_NOT_FOUND })
}