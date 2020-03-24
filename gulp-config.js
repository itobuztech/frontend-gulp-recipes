var appRoot = require('app-root-path');


const config = {
  themeFolder : appRoot + '/theme/',
  fontName: 'Icons',

  dist: '/dist',

  cleanPaths: [
    appRoot + '/dist/scripts',
    appRoot + '/dist/scss'
  ]
}


module.exports  = config;