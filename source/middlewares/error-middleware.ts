import {NextFunction, Request, Response} from "express";
import {UNKNOWN_SERVER_ERROR} from "../core/constants/error-keys.js";

export function errorMiddleware (_error: unknown, _request: Request, response: Response, _next: NextFunction) {
    return response.status(500).json({ message: 'Unknown internal server error', key: UNKNOWN_SERVER_ERROR })
}