const db        = require('../../../database/start.js')
const app       = require('../../../app.js')(db)
const supertest = require('supertest')
const should    = require('should')
const mongoose  = require('mongoose')

describe('tag', function () {
  
  it('should return a valid status when getting tags',
    done => {
      supertest(app)
      .get('/tags')
      .end((err,res) => {
        res.status.should.equal(200)
        done()
      })
    }
  )

  it('should find similar tags',
    done => {
      supertest(app)
      .post('/tag_by_name')
      .send({tag_name: 'trump'})
      .end((err, res) => {
        res.body[0].name.should.equal('trump')
        done()
      })
    }
  )

})