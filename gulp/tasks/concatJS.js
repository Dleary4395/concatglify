var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var handleErrors = require('../utils/handleErrors');
var config = require('../config').concatJS;

gulp.task('concatJS', function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.dest));
});