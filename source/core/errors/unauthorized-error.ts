import {InternalError} from "./internal-error.js";

export class UnauthorizedError extends InternalError {
    public readonly httpStatusCode = 401

    constructor(readonly message: string, readonly key: string) {
        super(message, key);
    }
}