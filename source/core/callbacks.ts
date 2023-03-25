import {Express} from "express";
import {Logger} from "./logger.js";

export async function onServerStarted (_server: Express) {
    Logger.log('Server', 'started.')
}
