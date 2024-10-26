
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cardsController = require('./controller/cardController');
const usersController = require('./controller/userController')


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/card',cardsController);
app.use('/user',usersController)


mongoose.connect("mongodb://localhost:27017/taskmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    app.listen(3000);
    console.log("Server Started on the port");
})
.catch((err) => {
    console.log("Unable to establish connect with database",err);
})