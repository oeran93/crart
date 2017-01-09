const db        = require('../../../database/start.js')
const app       = require('../../../app.js')(db)
const supertest = require('supertest')
const should    = require('should')
const Article   = require('../../../database/article.js')
const mongoose  = require('mongoose')

describe('article', function () {
  
  it('should find articles with similar tags', 
    done => {
      supertest(app)
      .get('/articles_by_tags')
      .query({'tags[]': ['5855613cf83dfd651cfd367e']})
      .end((err,res) => {
        console.log(res.body)
        res.status.should.equal(200)
        done()
      })
    }
  )
  // it('should add a new article',
  //   done => {
  //     Article.count({}, (err,before_count) => {
  //       supertest(app)
  //       .put('/add_article')
  //       .send({
  //         url: "http://www.lettera43.it/it/articoli/politica/2016/01/12/battersi-per-i-gay-non-serve-alla-lotta-di-classe/161211/",
  //         title: "Battersi per i gay non serve alla lotta di classe",
  //         author: "Diego Fusaro",
  //         description: "Lasciate che vi spieghi in due parole perché non faccio mie le battaglie omosessuali, pur non avendo assolutamente nulla contro gli omosessuali e, anzi, pensando che l'omosessualità sia perfettamente secondo natura",
  //         complexity: 1,
  //         tags_: [new mongoose.mongo.ObjectId('585b263e0f675daae4723874')]
  //       })
  //       .end((err, res) => {
  //         res.status.should.equal(200)
  //         Article.count({}, (err,after_count) => {
  //           after_count.should.equal(before_count+1)
  //           done()
  //         })
  //       })
  //     })
  //   }
  // )


})