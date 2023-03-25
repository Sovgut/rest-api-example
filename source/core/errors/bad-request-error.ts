import {InternalError} from "./internal-error.js";

export class BadRequestError extends InternalError {
    public readonly httpStatusCode = 400

    constructor(readonly message: string, readonly key: string) {
        super(message, key);
    }
}