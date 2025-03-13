const { StatusCodes } = require('http-status-codes')
const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { compareTime } = require('../utils/helpers/datetime-helpers');

/**
 * GET : /flights
 * req-body {
 *  "flightNumber" : "",
 *  "airplaneId" : "",
 *  "departureAirportId" : "",
 *  "airplaneId" : "",
 *  "airplaneId" : "",
 *  "airplaneId" : "",
 *  "airplaneId" : "",
 *  "airplaneId" : "",
 *  "airplaneId" : "",
 * }
 */
async function createFlight(req,res) {
    try {

        if(compareTime(req.body.arrivalTime,req.body.departureTime))
        {
            const flight = await FlightService.createFlight({
                flightNumber:req.body.flightNumber,
                airplaneId:req.body.airplaneId,
                departureAirportId:req.body.departureAirportId,
                arrivalAirportId:req.body.arrivalAirportId,
                arrivalTime:req.body.arrivalTime,
                departureTime:req.body.departureTime,
                price:req.body.price,
                boardingGate:req.body.boardingGate,
                totalSeats:req.body.totalSeats,
            });
            SuccessResponse.data=flight;
            return res
                      .status(StatusCodes.CREATED)
                      .json(SuccessResponse)
        }
        else
        {
            ErrorResponse.error="Time mismatch";
        return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse)
        }
        
                  
    } catch (error) {
      ErrorResponse.error=error;
        return res
                  .status(error.statusCode)
                  .json(ErrorResponse)
    }
}


module.exports={
    createFlight
}