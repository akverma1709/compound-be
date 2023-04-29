const express = require("express");
const router = express.Router();
const compoundController = require("../../controllers/compound");
const { celebrate } = require('celebrate');
const { listValidation, updateValidation, detailValidation } = require("../../validation");

router.get('/list',
    celebrate(listValidation),
    compoundController.list);

router.put('/update',
    celebrate(updateValidation),
    compoundController.update);

router.get('/detail',
    celebrate(detailValidation),
    compoundController.delail);

module.exports = router;
