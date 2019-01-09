"use strict"
const tracer = require('tracer').console()
const validator = require('validator')

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

    getMatched(filter){
        /*
        expecting array of strings
        */
        return new Promise((resolve, reject)=>{
            let message = ''
            if(filter.length > 0){
                try{
                    escapedFilter = JSON.parse(validator.escape(JSON.stringify))
                    resolve(escapedFilter)
                }
                catch(error){
                    tracer.info(error.name, error.description)
                    message = 'invalid filter'
                }
                
            }
            else{
                message('no filter provided')
            }

            reject(new Error(message))
        
        })
        .then((escapedFilter)=>{
            return this.knex('catalog').select('name', 'description').whereIn('description', escapedFilter)
        })
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