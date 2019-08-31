const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 100000
    },
    publicPath: "./",
    outputPath: "static/",
    name: "[name].[ext]"
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