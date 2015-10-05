'use strict';

import gulp       from 'gulp';
import stylus     from 'gulp-stylus';
import nib        from 'nib';
import minifyCSS  from 'gulp-minify-css';
import config     from './cfg/gulp-config';

export default () => {
  return gulp
    .src(config.styles.main)
    .pipe(stylus({
      use: nib(),
      'include css': true
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.output));
};
