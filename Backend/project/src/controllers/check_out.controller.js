const express = require('express');
const Check_out = require("../models/check_out.model");
const crudController = require('./crud.controller');

const router = express.Router();

router.post("",crudController.post(Check_out));
router.get("",crudController.get(Check_out));
//router.get("/:id",crudController.getbyid(Check_out));
router.get("/:id",async (req,res)=>{
    const item = await Check_out.findById(req.params.id).populate("address").populate("bookedBike").lean().exec();
    return res.status(200).send({item});
});

module.exports = router;