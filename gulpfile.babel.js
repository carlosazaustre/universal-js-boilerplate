/*
 * Universal JS Boilerplate
 * Copyright (c) Carlos Azaustre, carlosazaustre.es
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import gulp       from 'gulp';
import eslint     from 'gulp-eslint';
import babelify   from 'babelify';
import browserify from 'browserify';
import stylus     from 'gulp-stylus';
import nib        from 'nib';
import minifyCSS  from 'gulp-minify-css';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';

// -- Tasks --------------------------------------------------------------------

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['build:js', 'build:css']);

gulp.task('eslint', () => {
  return gulp
    .src(['./src/**/*.js', './src/**/*.jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build:js', ['eslint'], () => {
  return browserify({
    entries   : './src/client.js',
    debug     : true,
    extensions: ['.js', '.jsx'],
    transform : babelify
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./build/public'));
});

gulp.task('build:css', () => {
  return gulp
    .src('./src/styles/app.styl')
    .pipe(stylus({
      use: nib(),
      'include css': true
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/public'));
});

gulp.task('watch', () => {
  gulp.watch([
    './src/client.js',
    './src/server.js',
    './src/components/**/*.jsx'
  ], ['build:js']);
  gulp.watch([
    './src/styles/index.styl',
    './src/components/**/*.styl'
  ], ['build:css']);
});
