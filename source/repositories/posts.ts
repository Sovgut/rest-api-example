import type {Prisma} from "@prisma/client";
import type {IQuery} from "../core/types/utils.js";
import {databaseClient} from "../core/database.js";

export class PostsRepository {
    #database = databaseClient()

    async getPosts (query: IQuery) {
        const options: Prisma.PostFindManyArgs & Prisma.PostCountArgs = {
            take: query.take,
            skip: query.skip,
        }

        if (query.filter.id) {
            if (!options.where) options.where = {}

            options.where.id = query.filter.id
        }

        if (query.filter.title) {
            if (!options.where) options.where = {}

            options.where.title = {
                contains: query.filter.title
            }
        }

        if (query.filter.description) {
            if (!options.where) options.where = {}

            options.where.description = {
                contains: query.filter.description
            }
        }

        const rows = await this.#database.post.findMany(options)
        const count = await this.#database.post.count(options)

        return {rows, count}
    }

    getPost (id: string) {
        return this.#database.post.findFirst({where: {id}})
    }

    createPost (data: Prisma.PostCreateInput) {
        return this.#database.post.create({data})
    }

    updatePost (id: string, data: Prisma.PostUpdateInput) {
        return this.#database.post.update({where: {id}, data})
    }

    deletePost (id: string) {
        return this.#database.post.delete({where: {id}})
    }
}