const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function ValidateCreateRequest(req,res,next){
    if(!req.body.flightNumber){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter flightNumber" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.airplaneId){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter airplaneId" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.departureAirportId){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter departureAirportId" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter arrivalAirportId" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.arrivalTime){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter arrivalTime" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.departureTime){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter departureTime" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.price){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter price" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.totalSeats){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter totalSeats" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

module.exports={
    ValidateCreateRequest
}