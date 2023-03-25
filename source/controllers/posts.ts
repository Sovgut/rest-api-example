import {NextFunction, Request, Response} from "express";
import {PostsService} from "../services/posts.js";
import {createQuery} from "../core/utils/create-query.js";

export class PostsController {
    static async getPosts (request: Request, response: Response, next: NextFunction) {
        try {
            const query = createQuery(request.query)
            const service = new PostsService()
            const posts = await service.getPosts(query)

            response.status(200).json(posts)
        } catch (error) {
            next(error)
        }
    }

    static async getPost (request: Request, response: Response, next: NextFunction) {
        try {
            const service = new PostsService()
            const post = await service.getPost(request.params.id)

            response.status(200).json(post)
        } catch (error) {
            next(error)
        }
    }

    static async createPost (request: Request, response: Response, next: NextFunction) {
        try {
            const service = new PostsService()
            const post = await service.createPost(request.body)

            response.status(201).json(post)
        } catch (error) {
            next(error)
        }
    }

    static async updatePost (request: Request, response: Response, next: NextFunction) {
        try {
            const service = new PostsService()
            const post = await service.updatePost(request.params.id, request.body)

            response.status(201).json(post)
        } catch (error) {
            next(error)
        }
    }

    static async deletePost (request: Request, response: Response, next: NextFunction) {
        try {
            const service = new PostsService()
            const post = await service.deletePost(request.params.id)

            response.status(201).json(post)
        } catch (error) {
            next(error)
        }
    }
}