    
require('dotenv').config();

module.exports = {

  client: 'postgresql',
  connection: {
    host     : 'localhost',
    database : 'myersbriggs'
  },
  migrations: {
    directory: './database/migrations',
    tableName: 'migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
};