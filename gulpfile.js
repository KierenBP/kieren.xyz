'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const removeHtmlComments = require('gulp-remove-html-comments');
const browserSync = require('browser-sync').create();

gulp.task('default', function () {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('./src/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('./src/styles/**/*.scss', ['sass']).on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(removeHtmlComments())
    .pipe(gulp.dest('dist'));
});
