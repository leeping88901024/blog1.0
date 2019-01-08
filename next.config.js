const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withImages = require('next-images')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withImages(withCSS(withSass(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
}))))