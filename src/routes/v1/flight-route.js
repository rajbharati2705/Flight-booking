const express=require('express');
const { FlightController } = require('../../controllers');
const { ValidateCreateFlightRequestMiddleware } = require('../../middlewares');

const router=express();

// /api/v1/flights POST
router.post('/',
                ValidateCreateFlightRequestMiddleware.ValidateCreateRequest, 
                FlightController.createFlight );

module.exports = router;