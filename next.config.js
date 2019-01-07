const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')


// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withCSS(withSass(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})))