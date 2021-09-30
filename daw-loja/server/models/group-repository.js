const knex = require('../database');

module.exports ={
    find: () => {
        return knex.select().from('group')
        //select * from group;
    },

    findById: (params) =>{
        return knex.select().from('grupo').where('id', params.id);
        //select * from group where id=2
    },

    create: (params) => {
        return knex.insert(params).into('grupo')
        //create table
    },

    update: (params) =>{
        return knex('grupo').update(params).where('id', params.id)
    },

    delete: (params) =>{
        return knex('grupo').del(params).where('id', params.id)
    }

}