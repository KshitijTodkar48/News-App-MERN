import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    description: { type: String, required: true }
});

export const Post = mongoose.model('Post', postSchema);