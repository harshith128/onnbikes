const express = require('express');
const Check_out = require("../models/check_out.model");
const crudController = require('./crud.controller');

const router = express.Router();

router.post("",crudController.post(Check_out));
router.get("",crudController.get(Check_out));
router.get("/:id",crudController.getbyid(Check_out));

module.exports = router;