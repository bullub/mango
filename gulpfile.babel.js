import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';

// 包装的工具引入
import taskRollup from './builder/utils/task-rollup';

// rollup打包部分会使用到的构建工具
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

// 构建时需要使用的工具
import utils from './builder/utils';

// 后台接口mock工具
import mockServer from 'gulp-mock-server';

// 使用eslint做代码风格检查
import eslint from 'gulp-eslint';


const config = utils.getConfig();

// console.dir(config);

gulp.task('mock-serve', function () {
  return gulp.src('.')
    .pipe(mockServer({
      mockDir: './data',
      livereload: true,
      allowCrossOrigin: true,
      proxies: [
        {
          source: '/me.do', target: 'http://localhost:8000/me.do',
          options: {
            headers: {
              'Custom-Header': 'YES'
            }
          }
        }
      ]
    }));
});

function buildJS() {
  let stream = gulp.src('src/**/*.js');
  // 通过rollup打包
  taskRollup(stream);

  stream.pipe('./dist');
}

function buildHTML() {

}

function buildCSS() {

}