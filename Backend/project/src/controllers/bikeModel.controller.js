const express = require('express');

const Models = require("../models/bikemodel.model");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("",crudController.post(Models));
router.get("",crudController.get(Models));

module.exports = router;