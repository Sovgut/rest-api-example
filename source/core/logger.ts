import chalk from "chalk";

export class Logger {
    readonly #namespace: string

    constructor (namespace: string) {
        this.#namespace = namespace
    }

    log (output: unknown) {
        Logger.log(this.#namespace, output)
    }

    static log (namespace: string, output: unknown) {
        console.log(chalk.cyan(namespace), output)
    }

    warn (output: unknown) {
        Logger.warn(this.#namespace, output)
    }

    static warn (namespace: string, output: unknown) {
        console.warn(chalk.yellow(namespace), output)
    }

    error (output: unknown) {
        Logger.error(this.#namespace, output)
    }

    static error (namespace: string, output: unknown) {
        console.error(chalk.red(namespace), output)
    }
}