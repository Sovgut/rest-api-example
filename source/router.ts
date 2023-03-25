import {Router} from 'express'
import {PostsController} from "./controllers/posts.js";
import {UUID_PATTERN} from "./core/constants/patterns.js";

const router = Router({ mergeParams: true })

router.get(`/posts`, PostsController.getPosts)
router.post(`/posts`, PostsController.createPost)
router.get(`/posts/:id(${UUID_PATTERN})`, PostsController.getPost)
router.put(`/posts/:id(${UUID_PATTERN})`, PostsController.updatePost)
router.delete(`/posts/:id(${UUID_PATTERN})`, PostsController.deletePost)

export default router
