'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * StatRune Schema
 */
var StatRuneSchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true
  },
  cost: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    default: '',
    trim: true
  },
  requiredStr: {
    type: Number,
    default: 0
  },
  requiredDex: {
    type: Number,
    default: 0
  },
  requiredCon: {
    type: Number,
    default: 0
  },
  requiredInt: {
    type: Number,
    default: 0
  },
  requiredSpi: {
    type: Number,
    default: 0
  },
  grantedBaseStr: {
    type: Number,
    default: 0
  },
  grantedBaseDex: {
    type: Number,
    default: 0
  },
  grantedBaseCon: {
    type: Number,
    default: 0
  },
  grantedBaseInt: {
    type: Number,
    default: 0
  },
  grantedBaseSpi: {
    type: Number,
    default: 0
  },
  grantedMaxStr: {
    type: Number,
    default: 0
  },
  grantedMaxDex: {
    type: Number,
    default: 0
  },
  grantedMaxCon: {
    type: Number,
    default: 0
  },
  grantedMaxInt: {
    type: Number,
    default: 0
  },
  grantedMaxSpi: {
    type: Number,
    default: 0
  },
});

/**
 * Statics
 */
StatRuneSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('StatRune', StatRuneSchema);
