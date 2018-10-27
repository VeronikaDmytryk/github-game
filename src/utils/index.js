const basename = require('path').basename
// Regexps are changed in order to open the project in Windows. Replaced "/" to "\""
const path = (directory) => {
    const componentName = directory
        .replace(/(.*\\src\\spas\\)/g, '')
        .replace(/(\\fonts\\)|(\\fonts)$/g, '')
        .replace(/(\\scss\\)|(\\scss)$/g, '')
        .replace(/(\\components\\)|(\\components)$/g, '')
    return componentName
  }
  
module.exports = {path}