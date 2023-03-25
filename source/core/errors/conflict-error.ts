import {InternalError} from "./internal-error.js";

export class ConflictError extends InternalError {
    public readonly httpStatusCode = 409

    constructor(readonly message: string, readonly key: string) {
        super(message, key);
    }
}