const BUNDLE_HELPER = require('../../utils')

module.exports = {
  files: [
    './icons/beer.svg'
  ],
  fileName: BUNDLE_HELPER.path(__dirname) + '\\fonts.[ext]' // Path is changed in order to open the project in Windows. Replaced "/" to "\""
}
