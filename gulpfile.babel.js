/*
 * Universal JS Boilerplate
 * Copyright (c) Carlos Azaustre, carlosazaustre.es
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import gulp       from 'gulp';
import linterJS   from './tasks/gulp-lint-js';
import linterCSS  from './tasks/gulp-lint-css';
import buildJS    from './tasks/gulp-build-js';
import buildCSS   from './tasks/gulp-build-css';

import clean      from './tasks/gulp-clean';

import config     from './tasks/cfg/gulp-config';

gulp.task('eslint', linterJS);
gulp.task('stylint', linterCSS);

gulp.task('build:js', ['eslint'], buildJS);
gulp.task('build:css', ['stylint'], buildCSS);

gulp.task('clean', clean);

gulp.task('default', ['clean', 'build', 'watch']);
gulp.task('build', ['clean', 'build:js', 'build:css']);

gulp.task('watch', () => {
  gulp.watch(config.scripts.watch, ['build:js']);
  gulp.watch(config.styles.wathc, ['build:css']);
});
