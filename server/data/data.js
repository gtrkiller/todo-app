import mysql from 'mysql';
export const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "guidoke32",
    database: `todo-app`,
  });
export const getPostsDA = (callback) => { 
    db.query("SELECT * FROM item", null, callback);
}

export const getPostDA = async (id, callback) => { 
    await db.query("SELECT * FROM item WHERE id = ?",id, callback);
}

export const createPostDA = async (title, message, callback) => {
  await db.query(
    "INSERT INTO item (title, message) VALUES (?,?)",
    [title, message],callback);
}

export const updatePostDA = async (id, title, message, completed, callback) => {
    await db.query(
        "UPDATE item SET title = ?, message = ?, completed = ? WHERE id = ?",
        [title, message, completed, id], callback);
}

export const deletePostDA = async (id, callback) => {
  db.query("DELETE FROM item WHERE id = ? LIMIT 1", id, callback);
}
