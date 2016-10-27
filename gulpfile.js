'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const removeHtmlComments = require('gulp-remove-html-comments');
const browserSync = require('browser-sync').create();

gulp.task('default', () => {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('./src/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('./src/styles/**/*.scss', ['sass']).on('change', browserSync.reload);
});

gulp.task('sass', () => {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
    gulp.src('./dist/css/main.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/main.css'));
});

gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(removeHtmlComments())
    .pipe(gulp.dest('dist'));
});
