import gulp       from 'gulp';
import babelify   from 'babelify';
import browserify from 'browserify';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import config     from './cfg/gulp-config';

export default () => {
  return browserify({
    entries: config.scripts.client,
    debug: true,
    extensions: ['.js', '.jsx'],
    transform: babelify
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest(config.output));
};
