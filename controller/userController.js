const userService = require('../service/userService');
const express = require('express');
const router = express.Router();

router.post('/register', async(req,res) => {
    try{
        const user_to_add = req.body;
        const addUserRes = await userService.addUser(user_to_add);
        if(res.statusCode === 200 && addUserRes){
          return  res.send("user registered");
        }
        else{
          return res.status(400).send("Invalid Payload / Something went wrong");
        }
   
       }
       catch(err){
          return res.status(500).send("An error ocuured while registering  user",err);
       }
});


router.post('/login', async(req,res) => {
    try{
        const user_email = req.body.email;
        const user_password = req.body.password;
        const loginUserRes = await userService.login(user_email,user_password);
        if(res.statusCode === 200 && loginUserRes){
          return  res.send("user login success");
        }
        else{
          return res.status(400).send("Invalid user credentials /login failed");
        }
   
       }
       catch(err){
          return res.status(500).send("An error ocuured while loging  user");
       }
})

module.exports = router;