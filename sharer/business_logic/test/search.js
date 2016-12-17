const app       = require('../../../app.js')
const supertest = require('supertest')
const should    = require('should')

describe('search', function () {
  
  it('should return a valid status',
    function (done) {
      supertest(app)
      .get()
      .expect(200)
      .end((err,res) => {
        res.status.should.equal(200)
        done()
      })
    }
  )


})