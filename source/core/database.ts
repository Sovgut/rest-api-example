import { PrismaClient } from '@prisma/client'

let database: PrismaClient | null = null

export function databaseClient () {
    if (database instanceof PrismaClient) {
        return database
    }

    return (database = new PrismaClient({errorFormat: 'minimal'}))
}