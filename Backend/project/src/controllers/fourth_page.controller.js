const express = require('express');

const Fourth = require("../models/fourth_page.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("",crudController.post(Fourth));
router.get('',crudController.get(Fourth));
router.get('/:id',crudController.getOne(Fourth));
router.patch('/:id',crudController.patch(Fourth));
router.delete('/:id',crudController.deleteOne(Fourth));

module.exports = router;