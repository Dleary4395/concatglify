var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var handleErrors = require('../utils/handleErrors');
var config = require('../config').uglify;
var del = require('del');
var rename = require('gulp-rename');

gulp.task('uglify', ['concatJS'],function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest(config.dest));
});