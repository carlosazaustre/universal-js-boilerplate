import gulp from 'gulp';
import del from 'del';
import config from './cfg/gulp-config';

export default () => {
  return del([
          config.output + 'app.js',
          config.output + 'app.css'
        ]);
};
