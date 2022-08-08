// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./')

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle
};