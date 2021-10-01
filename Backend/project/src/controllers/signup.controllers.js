const express = require("express");

const router = express.Router();

const NewUser = require("../models/signup.model");
const loginUser = require("../models/login.model")

router.post("", async (req, res) => {
    const pastUser = await loginUser.find({email:req.body.email});
    // console.log(pastUser.length)
    if(pastUser.length !== 0){
        return res.status(201).send(true) 
    }
    // console.log(req)
    const user = await NewUser.create(req.body);
    // console.log(user)
    return res.status(201).send({user})
})

router.get("", async (req, res)=>{
    const user = await NewUser.find().lean().exec();
    // console.log(user)
    return res.status(200).send({user})
})

module.exports = router