'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const removeHtmlComments = require('gulp-remove-html-comments');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

// Default gulp command (watch for file change and browsersync)
gulp.task('default', () => {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('./src/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('./src/styles/**/*.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch('./src/images/**.*', ['images']).on('change', browserSync.reload);
});

// Compile and compressed sass
gulp.task('sass', () => {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Remove HTML comments
gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(removeHtmlComments())
    .pipe(gulp.dest('dist'));
});

// Image Minfier
gulp.task('images', () =>
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
);
