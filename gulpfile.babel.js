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
import stylint    from 'gulp-stylint';
import jscs       from 'gulp-jscs';
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

// -- Linters
gulp.task('eslint', () => {
  return gulp
    .src(['./src/app/**/*.js', './src/app/**/*.jsx'])
    .pipe(jscs())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('stylint', () => {
  return gulp
    .src([
      './src/styles/**/*.styl',
      './src/app/shared/components/**/*.styl',
      '!./src/styles/base/normalize.styl',
    ])
    .pipe(stylint({ config: '.stylintrc' }));
});

// -- Builders
gulp.task('build:js', ['eslint'], () => {
  return browserify({
    entries   : './src/app/client/index.js',
    debug     : true,
    extensions: ['.js', '.jsx'],
    transform : babelify,
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./build/public'));
});

gulp.task('build:css', ['stylint'], () => {
  return gulp
    .src('./src/styles/app.styl')
    .pipe(stylus({
      use: nib(),
      'include css': true,
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/public'));
});

// -- Watch files

gulp.task('watch', () => {
  gulp.watch([
    './src/app/server/index.js',
    './src/app/client/index.js',
    './src/app/shared/components/**/*.jsx',
    './src/app/shared/routes.js'
  ], ['build:js']);
  gulp.watch([
    './src/styles/**/*.styl',
    './src/app/shared/components/**/*.styl',
  ], ['build:css']);
});
