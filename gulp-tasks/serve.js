
var gulp = require('gulp');
const config = require('../gulp-config.js');

gulp.task('serve', function () {
  gulp.watch(config.themeFolder+'scss/**/*.scss', gulp.series('styles'));
  gulp.watch(config.themeFolder+'assets/icons/*.svg', gulp.series('icon'));
});