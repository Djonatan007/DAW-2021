const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'zxcvbnm1',
      database : 'dawdb'
    }
});

module.exports = knex;