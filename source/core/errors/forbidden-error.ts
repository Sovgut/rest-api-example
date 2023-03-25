import {InternalError} from "./internal-error.js";

export class ForbiddenError extends InternalError {
    public readonly httpStatusCode = 403

    constructor(readonly message: string, readonly key: string) {
        super(message, key);
    }
}