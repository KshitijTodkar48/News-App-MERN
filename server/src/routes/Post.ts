import express from 'express';
import controller from '../controllers/Post';

const router = express.Router();

router.get('/posts', controller.getAllPosts);
router.post('/createPost', controller.createPost);

export = router;