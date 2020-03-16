var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var config = require('../gulp-config.js');



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