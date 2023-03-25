export function createWhereQuery (query: any) {
    let where: any = {}

    if (typeof query !== 'object') {
        return where
    }

    for (const key of Object.keys(query)) {
        if (typeof query[key] !== 'undefined') {
            where[key] = query[key]
        }
    }

    return where
}