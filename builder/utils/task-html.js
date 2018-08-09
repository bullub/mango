import atk from 'gulp-atk';
import gulp from 'gulp';

import configer from './config';

import plumber from 'gulp-plumber';

import errorHandler from './error-handler';

const config = configer.getConfig();

const atkConfig = {
  ...config.atkConfig,
  rules: config.rule
};

export default taskHTML;


/**
 * 构建atk流程
 * @param {Stream} stream 参与构建的gulp流
 * @returns {Stream} 返回流过ATK构建器的流
 */
function taskHTML() {
  return gulp.src('src/**/*.html')
    .pipe(plumber({
      errorHandler
    }))
    .pipe(atk(atkConfig))
    .pipe(gulp.dest('./dist'));
}

