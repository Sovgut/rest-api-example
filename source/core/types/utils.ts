export interface IQuery {
    take: number
    skip: number
    search: string
    filter: {
        [field: string]: string
    }
}