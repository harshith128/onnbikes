const express = require('express');

const Pick = require("../models/pick_up.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("",crudController.post(Pick));
router.get('',crudController.get(Pick));
router.get('/:id',crudController.getOne(Pick));

// router.get('/city/:id',async (req,res)=>{
//     const address = await Pick.find({city:req.params.id}).lean().exec();

//     res.render('fetch',{
//         address:address
//     })

// });
router.patch('/:id',crudController.patch(Pick));
router.delete('/:id',crudController.deleteOne(Pick));

module.exports = router;