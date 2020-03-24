const gulp  = require("gulp");
const del = require('del');
var appRoot = require('app-root-path');
var config = require('../gulp-config.js');

gulp.task('publish', async() => {
  return gulp.src(config.themeFolder + '/**/*.*')
    .pipe(gulp.dest(appRoot + '/dist'))
})

gulp.task('clean', async() => {
  return del.sync(config.cleanPaths);
})
