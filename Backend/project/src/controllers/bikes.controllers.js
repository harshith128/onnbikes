const express = require('express');

const Bikes = require("../models/bikes.model");

const router = express.Router();


router.post("",async (req,res)=>{
    const bikes = await Bikes.create(req.body) // insert 

    return res.status(201).send({bikes});
})

router.get("",async (req,res)=>{
    const bikes = await Bikes.find();

    return res.status(200).send({bikes});
})

router.get("/:id",async (req,res)=>{
    const bikes = await Bikes.findById(req.params.id)

    return res.status(200).send({bikes});
})

router.patch("/:id",async (req,res)=>{
    const bikes = await Bikes.findByIdAndUpdate(req.params.id,req.body,{new:true});

    return res.status(200).send({bikes});
})

router.delete("/:id",async(req,res)=>{
    const bikes = await Bikes.findByIdAndDelete(req.params.id);

    return res.status(200).send("Comment Deleted");
})

// router.get("/Honda", async (req, res) =>{
//     const bikes = await Bikes.find({manufacturer:Honda})

//     return res.status(200).send({bikes});
// })

router.get("/manufacturer/:id", async(req, res) =>{
    const bikes = await Bikes.find({manufacturer:req.params.id});

    return res.status(200).send({bikes});
})

router.get("/model/:id", async (req, res) => {
    const bikes = await Bikes.find({model:req.params.id});

    return res.status(200).send({bikes});
})

router.get("/vehicleType/:id",async (req, res) =>{
    const bikes = await Bikes.find({vehicleType:req.params.id})

    return res.status(200).send({bikes});
})
module.exports = router;

