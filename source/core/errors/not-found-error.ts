import {InternalError} from "./internal-error.js";

export class NotFoundError extends InternalError {
    public readonly httpStatusCode = 404

    constructor(readonly message: string, readonly key: string) {
        super(message, key);
    }
}