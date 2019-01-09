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

router.get('/match', (req, res)=>{
    catalogKnexSrc.getMatched(req.query.filter)
    .then((collection)=>{
        res.json(collection)
    })
})

router.post('/', (req, res)=>{
    // TODO: authentication steps to ensure user has permissions to add new items
    catalogKnexSrc.addNew(req.query.catalogItems)
    .then((collection)=>{
        res.json(collection)
    })
})

router.put('/', (req, res)=>{
    // TODO: authentication steps to ensure user has permissions to update items
    catalogKnexSrc.updateItem(req.query.catalogItems)
    .then((collection)=>{
        res.json(collection)
    })
})

router.delete('/', (req, res)=>{
    // TODO: authentication steps to ensure user has permissions to delete items
    catalogKnexSrc.deleteItem(req.query.catalogItems)
    .then((collection)=>{
        res.json(collection)
    })
})

module.exports = router;
