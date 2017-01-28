'use strict';

var gulp = require('gulp'),
    del = require('del'),
    webpack = require('./gulp/webpack')

var outdir = 'dist';

var staticFiles = {
  src:  ['src/**/*.html', 'src/**/*.css']
}
function clean() {
  return del([outdir])
}

function copyStatic() {
  return gulp.src(staticFiles.src).pipe(gulp.dest(outdir))
}

function watchStatic() {
  gulp.watch(staticFiles.src, function() { return copyStatic()});
}

function buildJs() {
  return webpack.build();
}

function watchJs() {
  return webpack.watch();
}

var build = gulp.series(
    clean, 
    gulp.parallel(
      buildJs,
      copyStatic));

var watch = gulp.parallel(watchStatic, watchJs);

exports.clean = clean;
exports.build = build;
exports.watch = watch;