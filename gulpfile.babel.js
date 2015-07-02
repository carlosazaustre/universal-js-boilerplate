'use strict'

import gulp       from 'gulp'
import eslint     from 'babel-eslint'
import babelify   from 'babelify'
import browserify from 'browserify'
import source     from 'vinyl-source-stream'
import buffer     from 'vinyl-buffer'

gulp.task('build:js', () => {
  return browserify({
    entries   : './client.js',
    debug     : true,
    extensions: ['.js', '.jsx'],
    transform : babelify
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', () => {
  gulp.watch(['./client.jsx'], ['build:js'])
})

gulp.task('build', ['build:js'])

gulp.task('default', ['build', 'watch'])
