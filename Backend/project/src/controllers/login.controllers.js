const express = require("express");

const router = express.Router();

const loginUser = require("../models/login.model")

router.post("", async (req, res) => {
    const user = await loginUser.find({$and:[{email:req.body.email}, {password:req.body.password}]})
    return res.status(200).send({user})
})

module.exports = router