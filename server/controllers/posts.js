import express from 'express';
import {getPostsDA, getPostDA, createPostDA, updatePostDA, deletePostDA} from '../data/data.js'

const router = express.Router();
export const getPosts = (req, res) => { 
    getPostsDA((err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(result);
        }});
}

export const getPost = async (req, res, opid) => { 
     const { id } = opid || req.body;
     getPostDA(id, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(result);
        }});
}

export const createPost = async (req, res) => {
    const { title, message } = req.body;
    createPostDA(title, message,(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({title: title, message: message});
        }});
}

export const updatePost = async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const message = req.body.message;
    const completed = req.body.completed;
    updatePostDA(id, title, message, completed,(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({id: id, title: title, message: message, completed: completed});
        }});
}

export const deletePost = async (req, res) => {
    const id = req.body.id;
    deletePostDA(id,(err, result) => {
        if (err) {
          console.log(err);
        } else {
            res.status(200).json(result);
        }
    });
    
}
export default router;