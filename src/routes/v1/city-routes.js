const express=require('express');
const { CityController } = require('../../controllers');
const { ValidateCreateCityRequestMiddleware } = require('../../middlewares');

const router = express();

// /api/v1/cities POST
router.post('/', 
                ValidateCreateCityRequestMiddleware.ValidateCreateCityRequest,
                CityController.createAeroplane );



module.exports = router;