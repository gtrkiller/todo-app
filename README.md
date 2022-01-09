Before executing the script you should change the user and password for the mysql DB on line 2 and 3 of the script. Also, you should change the mysql credentials to yours in the controllers/posts.js file.

For now, the database is accessed through localhost, so that means you can see the responsive design and login on the local network on a cellphone, but you cannot see the cards containing the items because you can't access them from the DB server. You can try the To Do functionality on the computer running the client and server only.

2nd COMMIT KNOWN BUG: After creating an item, the first click won't work if you try to edit or check the item, so it is advised to click once on the edit button an then test all the functionalities.

Technologies used: 

Node 14.17.10
React 16.12.0
MySQL 8.0

Client dependencies:

"@material-ui/core": "^4.9.10",
"@material-ui/icons": "^4.9.1",
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.3.2",
"@testing-library/user-event": "^7.1.2",
"axios": "^0.19.2",
"create-react-app": "^5.0.0",
"moment": "^2.27.0",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-file-base64": "^1.0.3",
"react-redux": "^7.1.3",
"react-scripts": "3.4.1",
"redux": "^4.0.5",
"redux-thunk": "^2.3.0"

Server dependencies:

"body-parser": "^1.19.0",
"cors": "^2.8.5",
"express": "^4.17.1",
"mongoose": "^5.9.29",
"mysql": "^2.18.1",
"nodemon": "^2.0.15"
"concurrently": "^7.0.0"
