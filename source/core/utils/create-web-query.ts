import type {IQuery} from "../types/utils.js";
import {Logger} from "../logger.js";

export function createWebQuery (query: any): IQuery {
    const logger = new Logger('CreateWebQuery')

    let take = 10
    let skip = 0
    let filter = {}
    let search = ""

    if (typeof query.limit === 'string') {
        const limit = parseInt(query.limit, 10)

        if (!isNaN(limit)) {
            take = limit
        } else {
            logger.warn('received invalid "limit" query. used default (10)')
        }
    }

    if (typeof query.offset === 'string') {
        const offset = parseInt(query.offset, 10)

        if (!isNaN(offset)) {
            skip = offset
        } else {
            logger.warn('received invalid "offset" query. used default (0)')
        }
    }

    if (typeof query.filter === 'object') {
        filter = query.filter
    }

    if (typeof query.search === 'string') {
        search = query.search
    }

    return { take, skip, filter, search }
}