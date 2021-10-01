const express = require('express');
const Pick = require("../models/pick_up.model");
const City = require("../models/city.model");
const crudController = require("./crud.controller");

const router = express.Router();


router.post("",crudController.post(City));
router.get("",crudController.get(City));
// router.get('',async (req,res)=>{
//     const city = await City.find().lean().exec();
//     res.render('fetch',{
//         city:city
//     })
// });
router.get('/:id',crudController.getOne(City));
router.patch('/:id',crudController.patch(City));
router.delete('/:id',crudController.deleteOne(City));

router.get('/:id/address',async (req,res)=>{
    const address = await Pick.find({city:req.params.id});
    const city = await City.findById(req.params.id);

    return res.status(201).send({address,city});
});

router.get('/:id/shubh/',async (req,res)=>{
    const address = await Pick.findById(req.params.id);
    //const city = await City.findById(req.params.id);

    return res.status(201).send({address});
});
module.exports = router;