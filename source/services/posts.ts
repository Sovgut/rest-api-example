import {PostsRepository} from "../repositories/posts.js";
import type {IQuery} from "../core/types/utils.js";
import {IPostCreate, IPostUpdate} from "../core/types/post.js";

export class PostsService {
    #repository = new PostsRepository()

    getPosts (query: IQuery) {
        return this.#repository.getPosts(query)
    }

    getPost (id: string) {
        return this.#repository.getPost(id)
    }

    createPost (data: IPostCreate) {
        return this.#repository.createPost({
            title: data.title,
            description: data.description
        })
    }

    updatePost (id: string, data: IPostUpdate) {
        return this.#repository.updatePost(id, {
            title: data.title,
            description: data.description,
            updatedAt: new Date()
        })
    }

    deletePost (id: string) {
        return this.#repository.deletePost(id)
    }
}