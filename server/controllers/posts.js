import mysql from 'mysql';
import express from 'express';

const router = express.Router();
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "guidoke32",
    database: `todo-app`,
  });
export const getPosts = async (req, res) => { 
    await db.query("SELECT * FROM item", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(result);
        }
      });
}

export const getPost = async (req, res, opid) => { 
     const { id } = opid || req.body;
    await db.query("SELECT * FROM item WHERE id = ?",id, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(result);
        }
      });
}

export const createPost = async (req, res) => {
    const { title, message } = req.body;

  await db.query(
    "INSERT INTO item (title, message) VALUES (?,?)",
    [title, message],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({title: title, message: message});
      }
      }
  );
}

export const updatePost = async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const message = req.body.message;
    const completed = req.body.completed;
    await db.query(
        "UPDATE item SET title = ?, message = ?, completed = ? WHERE id = ?",
        [title, message, completed, id],
        (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({title: title, message: message, id: id, completed: completed});
        }
        }
    );
}

export const deletePost = async (req, res) => {
    const id = req.body.id;
  db.query("DELETE FROM item WHERE id = ? LIMIT 1", id, (err, result) => {
    if (err) {
      // console.log(err);
    } else {
      res.send(result);
    }
  });
}
export default router;