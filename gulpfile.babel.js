import gulp from 'gulp';
import del from 'del';

// 包装的工具引入
import taskJS from './builder/utils/task-js';
import taskHTML from './builder/utils/task-html';
import environment from './builder/utils/environment';

// 后台接口mock工具
import mockServer from 'gulp-mock-server';

// console.dir(config);
// 启动
gulp.task('mock-serve', function () {
  return gulp.src('.')
    .pipe(mockServer({
      mockDir: './data',
      allowCrossOrigin: true
    }));
});

gulp.task('clean', function() {
  return del('./dist', {force: true}).then(() => {
    return gulp.src([
      'src/**/*',
      '!src/**/*.html',
      '!src/**/*.ejs',
      '!src/**/*.js'
    ]).pipe(gulp.dest('./dist'));
  });
});


gulp.task('prd', gulp.series('clean', gulp.parallel(taskHTML, taskJS)));
gulp.task('dev', gulp.series('clean', gulp.parallel(taskHTML, taskJS)));
gulp.task('stg', gulp.series('clean', gulp.parallel(taskHTML, taskJS)));
gulp.task('uat', gulp.series('clean', gulp.parallel(taskHTML, taskJS)));

gulp.task('default', gulp.series(environment.getAccessEnvironment(), 'mock-serve', function watch(done) {
  gulp.watch([
    'src/**/*'
  ], gulp.series(environment.getAccessEnvironment()));
  done();
}));