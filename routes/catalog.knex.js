var express = require('express');
var router = express.Router();

const knex = require('knex')
const CatalogKnexSrc = require('../src/catalogKnexSrc').default.default
const catalogKnexSrc = new CatalogKnexSrc(knex)

require('dotenv').config({silent:true})

router.get('/', function(req, res, next) {
    catalogKnexSrc.getAll()
    .then((collection)=>{
        res.json(collection);
    })
});

module.exports = router;
