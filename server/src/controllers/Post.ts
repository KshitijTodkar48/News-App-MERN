import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Post } from '../models/Post';

const createPost = async (req: Request, res: Response) => {
    const { heading, description } = req.body;
    try {
        const post = new Post({
            _id: new mongoose.Types.ObjectId(),
            heading,
            description
        });
    
        await post.save();
        return res.status(201).json({ message: "Post published successfully."});

    } catch (error) {
        return res.status(500).json({ message: "An error occured."});
    }
}

const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find({});
        return res.status(201).json({ posts });

    } catch (error) {
        return res.status(500).json({ message: "An error occured."});
    }
}

export default { createPost, getAllPosts };