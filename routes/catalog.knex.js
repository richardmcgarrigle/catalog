var express = require('express');
var router = express.Router();

const knex = require('knex')

require('dotenv').config({silent:true})

router.get('/', function(req, res, next) {
    knex('catalog').select('Name', 'description')
    .then((collection)=>{
        res.json(collection);
    })
});

module.exports = router;
