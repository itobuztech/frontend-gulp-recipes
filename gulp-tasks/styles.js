var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var g = require('gulp-load-plugins')();
var config = require('../gulp-config.js');

// styles
gulp.task('styles', function async(cb) {

  gulp.src(config.themeFolder + 'scss/**/*.scss')
    .pipe(g.plumber())
    .pipe(g.sourcemaps.init())
    .pipe(g.sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
    }))
    .on('error', console.log.bind(console, 'Sass error:'))

    .pipe(autoprefixer())
    .pipe(g.sourcemaps.write())
    .pipe(gulp.dest(config.themeFolder + 'css/'))
    cb();
});
