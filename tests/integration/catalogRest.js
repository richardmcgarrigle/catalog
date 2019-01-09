"use strict"

const expect = require('chai').expect()
const app = require('../../app')
const requestAgent = require('supertest').agent(app)
const tracer = require('tracer').console()

describe('/api/catalog', ()=>{
    describe('GET', ()=>{
        it('should return all items in queried table', ()=>{
            const expectedResponse = [
                {
                    name: 'item1', 
                    description: 'description1'
                },
                {
                    name: 'item2',
                    description: 'description2'
                }
            ]
            return requestAgent.get('/api/catalog')
            .expect(200)
            .then((httpResponse)=>{
                tracer.info('httpResponse',httpResponse)
            })
        })
    })
})