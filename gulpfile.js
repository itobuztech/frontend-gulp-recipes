'use strict';
var gulp = require('gulp');
var g = require('gulp-load-plugins')();
const autoprefixer = require('gulp-autoprefixer');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var config = {
  themeFolder : './theme/',
  fontName: 'Icons'
}


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




const iconFontConfig = () => iconfont({
  fontName: config.fontName,
  normalize:true,
  fontHeight: 1000
 });
gulp.task('iconfont', function async (cb){
  gulp.src([config.themeFolder +'assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: config.fontName,
      path: './icons-template/_icons.scss',
      targetPath: '../scss/_icons.scss',
    }))
    .pipe(iconFontConfig())
    .pipe(gulp.dest(config.themeFolder +'fonts/'));
    cb();
});

gulp.task('iconfont:variable', function async(cb){
  gulp.src([config.themeFolder +'assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: config.fontName,
      path: './icons-template/_icons-variables.scss',
      targetPath: '../scss/_icons-variables.scss',
    }))
    .pipe(iconFontConfig())
    .pipe(gulp.dest(config.themeFolder +'fonts/'));
    cb();
});

gulp.task('iconfont:preview', function async(cb){
  gulp.src([config.themeFolder +'assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: config.fontName,
      path: './icons-template/icon-preview.html',
      targetPath: '../icon-preview.html',
    }))
    .pipe(iconFontConfig())
    .pipe(gulp.dest(config.themeFolder + 'temp/fonts'));
    cb();
});

gulp.task('icon', gulp.parallel('iconfont', 'iconfont:variable', 'iconfont:preview'));

gulp.task('serve', function () {
  gulp.watch(config.themeFolder+'**/*.scss', gulp.series('styles'));
  gulp.watch(config.themeFolder+'assets/icons/*.svg', gulp.series('icon'));
});