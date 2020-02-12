const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const session = require('express-session')
const morgan = require('morgan')
const passport = require('./passport');
const routes = require("./routes")
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

//sessions
app.use(
  session({
  secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
  resave: false, //required
  saveUninitialized: false //required
  })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//    "mongodb://dill922:Dilldill1@ds059651.mlab.com:59651/heroku_vftj295w"
// );

mongoose.connect(
  "mongodb://localhost/chuwana-prototypeDB"
)

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
