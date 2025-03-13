const { StatusCodes } = require('http-status-codes');
const { FlightRepository }=require('../repositories');
const AppError = require('../utils/errors/app-error');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    console.log('data', data)
    try {
            const flight= await flightRepository.create(data);
            return flight; 
    
       
    } catch (error) {
        if(error.name=='SequelizeValidationError')
        {
            let explaination =[];
            error.errors.forEach((err) => {
                explaination.push(err.messsage)
            });
            throw new AppError(explaination,StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot create a new flight object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}



module.exports={
    createFlight
}
