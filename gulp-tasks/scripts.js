var gulp = require("gulp");
var babel = require("gulp-babel");
var config = require('../gulp-config.js');

gulp.task("scripts", function (cb) {
  return gulp.src(config.themeFolder + 'scripts/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest(config.themeFolder +'assets/scripts/'));
    cb();
});