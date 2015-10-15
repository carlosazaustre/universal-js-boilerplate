import gulp       from 'gulp';
import stylus     from 'gulp-stylus';
import nib        from 'nib';
import minifyCSS  from 'gulp-minify-css';
import config     from './cfg/gulp-config';

const configStylus = {
  use: nib(),
  'include css': true
};

export default () => {
  return gulp
          .src(config.styles.main)
          .pipe(stylus(configStylus))
          .pipe(minifyCSS())
          .pipe(gulp.dest(config.output));
};
