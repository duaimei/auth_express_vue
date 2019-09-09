const express = require('express')
//knex and objectionjs are for data queries and ORM
const Knex = require('knex');
const knexConfig = require('./knexfile');
const { Model } = require('objection');
const cors = require('cors');
const routes = require('express').Router();
const passport = require('passport')
const OAuth2Strategy = require('passport-oauth2')
const bodyParser = require('body-parser')
const secrets = require('./config/secrets.json')

const app = express()
const port = 3000

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:8080'
}));
const oathSecrets = {
  authorizationURL: secrets.web.auth_uri,
  tokenURL: secrets.web.token_uri,
  clientID: secrets.web.client_id,
  clientSecret: secrets.web.client_secret,
  callbackURL: "http://localhost:3000/auth/google/callback"
}

passport.use(new OAuth2Strategy(oathSecrets,
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ exampleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));
app.get('/auth/google',
  passport.authenticate('oauth2', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('oauth2', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/just_redirect', (req, res) => {
  res.redirect('http://localhost:8080/')
})

app.use('/', routes);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})