const FacebookStrategy = require('passport-facebook').Strategy
const Admin = require('../database/admin.js')
const env = process.env

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((id, done) => {
    Admin.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(new FacebookStrategy({
    clientID: env.FB_CLIENT_ID,
    clientSecret: env.FB_CLIENT_SCRT,
    callbackURL: env.FB_CALLBACK,
    profileFields: ['id', 'name', 'picture', 'gender']
  }, facebookAuth))
}

function facebookAuth (token, refreshToken, profile, done) {
  Admin.findOne({'facebook.id': profile.id}, (err, user) => {
    if (err) return done(err)
    if (user) {
      return done(null, user)
    }else {
      const newAdmin = new Admin()
      newAdmin.facebook.id = profile.id
      newAdmin.facebook.token = token
      newAdmin.facebook.name = profile.name.givenName + ' ' + profile.name.familyName
      newAdmin.facebook.picture = profile.photos[0].value
      newAdmin.facebook.gender = profile.gender
      newAdmin.save((err) => {
        if (err) throw err
        return done(null, newAdmin)
      })
    }
  })
}
