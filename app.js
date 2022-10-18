const express = require('express');
const app = express();
const DBConnection = require('./database-connection');
const db = new DBConnection();

const bodyParser = require('body-parser');



app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
const getsRoute = require('./routes/gets');

// Middleware
app.use('/posts', postsRoute);
app.use('/gets', getsRoute);

 

// Connect to DB
db.dbConnect();

// How do we start listening to  the server
app.listen(3000);