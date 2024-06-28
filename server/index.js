const express = require("express");
const {connectMongodb}=require("./connection")
const {logreqresponse}=require("./middlewares")
const userrouter=require('./routes/user')
const cors = require('cors');
const app = express();
const port = 7000;

app.use(express.json())
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 


// connection
connectMongodb('mongodb://127.0.0.1:27017/openai');

// middleware but we can assume it as plugin
app.use(express.urlencoded({ extended: false }))

app.use(logreqresponse("log.txt"));


app.use('/api/users',userrouter)

app.listen(port, () => console.log(`started your server at ${port}`))