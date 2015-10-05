'use strict';

import gulp       from 'gulp';
import stylint    from 'gulp-stylint';
import config     from './cfg/gulp-config';

export default () => {
  return gulp
    .src(config.styles.input)
    .pipe(stylint({ config: './tasks/cfg/.stylintrc' }));
};
