import gulp       from 'gulp';
import stylint    from 'gulp-stylint';
import config     from './cfg/gulp-config';

const configStylint = {
  config: '.stylintrc'
};

export default () => {
  return gulp
    .src(config.styles.input)
    .pipe(stylint(configStylint));
};
