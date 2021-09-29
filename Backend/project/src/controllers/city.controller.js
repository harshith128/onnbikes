const express = require('express');

const City = require("../models/city.model");
const crudController = require("./crud.controller");

const router = express.Router();


router.post("",crudController.post(City));
router.get('/:id',crudController.get(City));
// router.get('',async (req,res)=>{
//     const city = await City.find().lean().exec();
//     res.render('fetch',{
//         city:city
//     })
// });
router.get('/:id',crudController.getOne(City));
router.patch('/:id',crudController.patch(City));
router.delete('/:id',crudController.deleteOne(City));

module.exports = router;