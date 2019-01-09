var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DBURI;
const client = new MongoClient(uri, { useNewUrlParser: true });

require('dotenv').config({silent:true})

router.get('/', function(req, res, next) {
    console.log('test')
    client.connect(err => {
        const collection = client.db("test").collection("devices");
       // perform actions on the collection object
        client.close();
      });
    res.json({response:'respond with a resource'});
});






module.exports = router;
