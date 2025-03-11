const { StatusCodes } = require('http-status-codes');
const {Logger} =require('../config');
const AppError = require('../utils/errors/app-error');

class CrudRepository{
    constructor(model)
    {
        this.model=model;
    }

    async create(data)
    {
        try {
            const response =await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in CrudRepo: Create',error);
            throw error;
        }
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if(!response) {
            throw new AppError('Not able to fund the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(data)
    {
        try {
            const response =await this.model.findByPk(data); 
            console.log('response232', response)
            if(!response)
            {
                throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
            }
            return response;
        } catch (error) {
            Logger.error('Something went wrong in CrudRepo: get',error);
            throw error;
        }
    }

    async getAll()
    {
        const response =await this.model.findAll(); 
        return response;
    }
    
    async update(id,data)
    {
        try {
            const response =await this.model.update(data,{
                where:{
                    id:id
                }
            }); 
            return response;
        } catch (error) {
            Logger.error('Something went wrong in CrudRepo: get',error);
            throw error;
        }
    }

    
}
module.exports = CrudRepository;