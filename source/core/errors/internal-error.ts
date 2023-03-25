export class InternalError extends Error {
    public readonly httpStatusCode: number = 500

    constructor(readonly message: string, readonly key: string) {
        super(message);
    }
}