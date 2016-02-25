'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var filters = require('gulp-filter');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var pkg = require('./package.json');
var dirs = pkg['intlytics-configs'].directories;


gulp.task('js', function () {
   gulp.src([
       './node_modules/angular/angular.js',
       './node_modules/angular-route/angular-route.js'
   ])
   .pipe(concat('angular.bundle.js'))
   .pipe(uglify())
   .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['js', 'sass'], function () {
    //var filter = filters(['**/*', '!src/sass']);
    var filter = filters([
        'components/**/*',
        'view1/**/*',
        'view2/**/*',
        '*.html',
        '*.js',
        '!src/sass'
    ]);
    gulp.src(['src/**/*'])
        .pipe(filter)
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'],function () {
  gulp.watch('./src/app/!*.scss', ['sass']);
  gulp.watch('./src/app/!*.js', ['js']);
  gulp.watch('./src/app/!*.html', ['html']);
});

gulp.task('default', ['build']);
