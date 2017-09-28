var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var purifycss = require('gulp-purifycss');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('./scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(purifycss(['./public/app/**/*.js', './views/**/*.jade']))
  .pipe(concat('style.css'))
  .pipe(cleanCSS({compatibility: 'ie9'}))
  .pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
