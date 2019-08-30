const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const compose = require('next-compose');

module.exports = compose([[withFonts],[withSass]]);
