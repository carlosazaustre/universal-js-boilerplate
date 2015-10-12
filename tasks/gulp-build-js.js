import gulp       from 'gulp';
import babelify   from 'babelify';
import browserify from 'browserify';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import config     from './cfg/gulp-config';

const configBrowserify = {
  entries: config.scripts.client,
  debug: true,
  extensions: ['.js', '.jsx'],
  transform: babelify
};

export default () => {
  return browserify(configBrowserify)
          .bundle()
          .pipe(source('app.js'))
          .pipe(buffer())
          .pipe(gulp.dest(config.output));
};
