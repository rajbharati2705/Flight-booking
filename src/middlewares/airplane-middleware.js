const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function ValidateCreateRequest(req,res,next){
    if(!req.body.modelNumber){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter modelNumber" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.capacity){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter capacity" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}

module.exports={
    ValidateCreateRequest
}