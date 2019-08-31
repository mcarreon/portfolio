const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
};

module.exports = withPlugins([withFonts, withSass, {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/resume': { page: '/resume' },
      '/blog': { page: '/blog' },
    };
  }
}], nextConfig);