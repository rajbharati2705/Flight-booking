const { StatusCodes } = require('http-status-codes')
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


/**
 * POST : /cities
 * req-body {
 *  "name" : ""
 * }
 */
async function createCity(req,res) {
    try {
        const city = await CityService.createCity({
            name:req.body.name
        });
        SuccessResponse.data=city;

        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse)
                  
    } catch (error) {
      ErrorResponse.error=error;
        return res
                  .status(error.statusCode)
                  .json(ErrorResponse)
    }
}


/**
 * DELETE : /cities/:id
 * req-body {}
 */
async function deleteCity(req, res) {
    try {
        const city = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * PATCH : /cities/:id
 * req-body {
 *  "modelNumber" : "",
 *  "capacity" : ""
 * }
 */
async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id , req.body);
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity
}