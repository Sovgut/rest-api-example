import {config} from 'dotenv'
import {join} from 'node:path'
import {fileURLToPath} from 'node:url'

export class Config {
    static {
        const currentPath = fileURLToPath(new URL('.', import.meta.url))
        const configPath = join(currentPath, '..', '..', '.env')

        config({ path: configPath })
    }
}