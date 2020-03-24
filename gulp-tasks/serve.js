
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const config = require('../gulp-config.js');


gulp.task('serve', function() {
  browserSync.init({
      server: {
          baseDir: config.themeFolder
      }
  });

  gulp.watch(config.themeFolder+'scss/**/*.scss', gulp.series('styles'));
  gulp.watch(config.themeFolder+'assets/icons/*.svg', gulp.series('icon'));
  gulp.watch(config.themeFolder+'scripts/**/*.js', gulp.series('scripts'));
  gulp.watch([
    config.themeFolder + 'assets/**/*.*',
    config.themeFolder + '*.html'
  ]).on('change', browserSync.reload);
});