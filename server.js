const express = require('express');
const app = express();
const port = 3000;
const Posts = require('./routes/Posts.js');;
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

// needs cors below to connect to react app

// MIDDLEWARE
app.use(bodyParser.json());
app.use('/posts',Posts)


// connection to database
mongoose.connect(`${process.env.DBCONNECTION}`,
{useNewUrlParser: true}, () =>{
    console.log('we are connected')
})
mongoose.set('useCreateIndex',true);

// connection to the server
app.listen(port)

