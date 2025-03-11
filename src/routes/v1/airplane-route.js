const express=require('express');
const { AirplaneController } = require('../../controllers');
const { ValidateCreateRequestMiddleware } = require('../../middlewares');

const router=express();

// /api/v1/airplane POST
router.post('/',
                ValidateCreateRequestMiddleware.ValidateCreateRequest, 
                AirplaneController.createAeroplane );

// /api/v1/airplane GET
router.get('/',
    AirplaneController.getAirplanes );

// /api/v1/airplane/:id GET
router.get('/:id',
    AirplaneController.getAirplane );

// /api/v1/airplane/:id GET
router.delete('/:id',
    AirplaneController.deleteAirplane );





module.exports = router;