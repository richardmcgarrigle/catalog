"use strict"
const tracer = require('tracer').console()

class catalogKnexSrc {
    constructor(knex){
        this.knex = knex;
    }

    getAll(){
        return this.knex('catalog').select('name', 'description')
        .catch((error)=>{
            return this._defaultErrorHandling(error)
        })
    }

    _defaultErrorHandling(error){
        tracer.warn(error.name, error.description)

        return Promise.reject(new Error(error.name))
    }
}

export default catalogKnexSrc