const {Logger} =require('../config')

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

    async destory(data)
    {
        try {
            const response =await this.model.destory({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in CrudRepo: Destory',error);
            throw error;
        }
    }

    async get(data)
    {
        try {
            const response =await this.model.findByPk(data); 
            return response;
        } catch (error) {
            Logger.error('Something went wrong in CrudRepo: get',error);
            throw error;
        }
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