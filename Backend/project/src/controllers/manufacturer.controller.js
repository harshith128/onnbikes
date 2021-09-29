const express = require('express');

const Manifacturer = require('../models/manufacturer.model');

const router = express.Router();

router.post("", async (req, res) =>{
    const manifacturer = await Manifacturer.create(req.body);

    return res.status(201).send({manifacturer});
})

router.get("",async (req,res)=>{
    const manifacturer = await Manifacturer.find();

    return res.status(200).send({manifacturer});
})

module.exports = router;