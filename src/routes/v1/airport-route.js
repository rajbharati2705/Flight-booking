const express=require('express');
const { AirportController } = require('../../controllers');
const { ValidateCreateAirportRequestMiddleware } = require('../../middlewares');

const router=express();

// /api/v1/airports POST
router.post('/', 
    ValidateCreateAirportRequestMiddleware.ValidateCreateRequest,
    AirportController.createAirport );

// /api/v1/airports GET
router.get('/',
    AirportController.getAirports );

// /api/v1/airports/:id GET
router.get('/:id',
    AirportController.getAirport );

// /api/v1/airports/:id DEL
router.delete('/:id',
    AirportController.deleteAirport );

// /api/v1/airports/:id PATCH
router.patch('/:id',
    AirportController.updateAirport );





module.exports = router;