const { StatusCodes } = require('http-status-codes')
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAeroplane(req,res) {
    try {
        const airplane = await AirplaneService.createAeroplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponse.data=airplane;

        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse)
                  
    } catch (error) {

      ErrorResponse.error=error;
        return res
                  .status(error.StatusCodes)
                  .json(ErrorResponse)
    }
}

/**
 * GET : /airplanes
 * req-body {}
 */
async function getAirplanes(req,res) {
    try {
        const airplanes = await AirplaneService.getAirplanes(); 
        SuccessResponse.data=airplanes;

        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error=error;
        return res
                  .status(error.StatusCodes)
                  .json(ErrorResponse)
    }
}

/**
 * GET : /airplanes/:id
 * req-body {}
 */
async function getAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
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

module.exports={
    createAeroplane,
    getAirplanes,
    getAirplane
}