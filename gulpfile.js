'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
 
// sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});
 
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});