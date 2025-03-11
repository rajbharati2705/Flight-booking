const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function ValidateCreateCityRequest(req,res,next){
    if(!req.body.name){

        ErrorResponse.message="Something went wrong";
        ErrorResponse.error=new AppError(["Incorrect paramenter name" ],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
   
    next();
}

module.exports={
    ValidateCreateCityRequest
}