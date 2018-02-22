const gulp = require('gulp');
const clean = require('gulp-clean');
const install = require('gulp-install');
const zip = require('gulp-zip');

gulp.task('clean', () =>
  gulp.src('./build/*', { read: false }).pipe(clean()));

gulp.task('install-dependancies', () =>
  gulp.src('./package.json')
    .pipe(gulp.dest('./build'))
    .pipe(install({ production: true })));

gulp.task('build-zip', () =>
  gulp.src(['./build/**/*'], { nodir: true, dot: true }) // nodir and dot option 
    .pipe(zip('simple-lambda.zip'))
    .pipe(gulp.dest('./build')));
