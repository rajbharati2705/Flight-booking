const { StatusCodes } = require('http-status-codes')
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * GET : /airpports
 * req-body {
 *  "modelNumber" : name:"IGI",cityId:5, code:"DEL",
 *  "capacity" : ""
 * }
 */
async function createAirport(req,res) {
    try {
        const airport = await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        });
        SuccessResponse.data=airport;

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
 * GET : /airpports
 * req-body {}
 */
async function getAirports(req,res) {
    try {
        const airpports = await AirportService.getAirports(); 
        SuccessResponse.data=airpports;

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
 * GET : /airpports/:id
 * req-body {}
 */
async function getAirport(req, res) {
    try {
        const airpports = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airpports;
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
 * DELETE : /airpports/:id
 * req-body {}
 */
async function deleteAirport(req, res) {
    try {
        const airpports = await AirportService.deleteAirport(req.params.id);
        SuccessResponse.data = airpports;
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
 * PATCH : /airpports/:id
 * req-body {
 *  "modelNumber" : "",
 *  "capacity" : ""
 * }
 */
async function updateAirport(req, res) {
    try {
        const airpports = await AirportService.updateAirport(req.params.id , req.body);
        SuccessResponse.data = airpports;
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
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}