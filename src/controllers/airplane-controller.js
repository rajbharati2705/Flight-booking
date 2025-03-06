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

module.exports={
    createAeroplane
}