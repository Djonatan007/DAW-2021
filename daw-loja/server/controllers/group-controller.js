const repository = require('../models/group-repository')
//demais rotas

module.exports = {
    index: async (req, res) =>{
        try {
            const result = await repository.find();
            return res.status(201).json(result);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    create: async (req, res) =>{
        const group = req.body;

        try {
            const result = await repository.create(group);
            return res.status(201).json(result);
        } catch (error) {
            res.status(500).json({message: error.message})
        }

    },

    show: async (req, res) =>{
        try  {
            
            const result = await repository.findById(req.params)
            if(result.length === 0){
                return res.status(404).json({message: 'Not Found'});
            } 

            return res.json(result);

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },

    update: async (req, res) =>{
        const group = req.body;

        try  {           
            const result = await repository.findById(req.params);
            if(result.length === 0){
                return res.status(404).json({message: 'Not Found'});
            } 

            await repository.update(group)
            return res.json(group);

        } catch (error) {
            res.status(500).json({message: error.message})
        }

    },

    delete: async(req, res) =>{
        try  {
            
            const result = await repository.findById(req.params)
            if(result.length === 0){
                return res.status(404).json({message: 'Not Found'});
            } 

            await repository.delete(req.params)
            return res.status(204);

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}