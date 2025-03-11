const express=require('express');
const { CityController } = require('../../controllers');
const { ValidateCreateCityRequestMiddleware } = require('../../middlewares');

const router = express();

// /api/v1/cities POST
router.post('/', 
                ValidateCreateCityRequestMiddleware.ValidateCreateCityRequest,
                CityController.createCity );

// /api/v1/cities/:id GET
router.delete('/:id',
    CityController.deleteCity );

// /api/v1/cities/:id PATCH
router.patch('/:id',
    CityController.updateCity );


module.exports = router;