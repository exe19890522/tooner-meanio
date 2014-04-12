'use strict';
/**
 *  Mean container for dependency injection
 */
var mean = require('meanio');
mean.app('Tooner',{});

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Initializing system variables
var config = require('./server/config/config');
var db = mongoose.connect(config.db);

// Bootstrap Models, Dependencies, Routes and the app as an express app
var app = require('./server/config/system/bootstrap')(passport, db);

// Start the app by listening on <port>
app.listen(config.port);
console.log('Express app started on port ' + config.port);

// Initializing logger
logger.init(app, passport, mongoose);

//Seed hearthstone cards
mongoose.connection.once('open', function() {
  console.log("Database open");

  if (config.seedData) {
    require('./server/config/seed.js');

    var Trait = mongoose.model('Trait');

    Trait.remove().exec()
    .then(function() { Trait.seed(require('./server/config/assets/starting-traits.json')); });

    console.log("Finished seeding");
  }
});

// Expose app
exports = module.exports = app;
