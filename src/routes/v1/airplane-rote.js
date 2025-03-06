const express=require('express');
const { AirplaneController } = require('../../controllers');
const { ValidateCreateRequestMiddleware } = require('../../middlewares');

const router=express();

// /api/v1/airplane POST
router.post('/',ValidateCreateRequestMiddleware.ValidateCreateRequest, AirplaneController.createAeroplane)

module.exports = router;