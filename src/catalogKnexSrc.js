"use strict"

class catalogKnexSrc {
    constructor(knex){
        this.knex = knex;
    }

    getAll(){
        return this.knex('catalog').select('name', 'description')
        .catch((error)=>{
            
        })
    }
}

export default catalogKnexSrc