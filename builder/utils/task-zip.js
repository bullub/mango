import gulp from 'gulp';
import zip from 'gulp-zip';
import moment from 'moment';
import rename from 'gulp-rename';

import { getAccessEnvironment } from './environment';

const pkgConf = require('../../package.json');

function saveZip() {
  let accessEnvironment = getAccessEnvironment();


  return gulp.src([
    'dist/**/*'
  ])
    .pipe(zip(`${accessEnvironment}_${moment().format('YYYY-MM-DD hh:mm:ss')}.zip`))
    .pipe(gulp.dest('./packages'))
    .pipe(rename(`${pkgConf.name}.latest.zip`))
    .pipe(gulp.dest('./packages'));
}

export default {
  saveZip
}