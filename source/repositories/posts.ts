import type {Prisma} from "@prisma/client";
import type {IQuery} from "../core/types/utils.js";
import {databaseClient} from "../core/database.js";
import {createWhereQuery} from "../core/utils/create-where-query.js";

export class PostsRepository {
    #database = databaseClient()

    async getPosts (query: IQuery) {
        const options: Prisma.PostFindManyArgs & Prisma.PostCountArgs = {
            take: query.take,
            skip: query.skip,
        }

        options.where = createWhereQuery({
            id: query.filter.id,
            title: query.filter.title && {
                contains: query.filter.title
            },
            description: query.filter.description && {
                contains: query.filter.description
            }
        })

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