const { StatusCodes } = require('http-status-codes');
const { AirportRepository }=require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {

    try {
        const airport= await airportRepository.create(data);
        return airport; 
    } catch (error) {
        if(error.name=='SequelizeValidationError')
        {
            let explaination =[];
            error.errors.forEach((err) => {
                explaination.push(err.messsage)
            });
            throw new AppError(explaination,StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot create a new airport object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAirports() {
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new AppError("Cannot fetch data of all the airport",StatusCodes.INTERNAL_SERVER_ERROR);
    }  
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirport(id) {
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id,body) {
    try {
        const airplane = await airportRepository.update(id,body);
        return airplane;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}
