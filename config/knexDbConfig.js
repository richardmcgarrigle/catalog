"use strict"
require('dotenv').config({silent:true})
const config = {
    client: 'mssql',
    connection: {
        host : process.env.relationalHost,
        user : process.env.relationalUser,
        password : process.env.relationalPassword,
        database : process.env.relationalDatabaseName
    }
}

const knex = require('knex')(config)
module.exports = knex;