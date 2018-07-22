import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';

// gulp与rollup结合使用的gulp插件
import rollup from 'gulp-better-rollup';

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

gulp.task('default', function (next) {
  return gulp.src('src/scripts/**/*.js', {
      base: 'src'
    })
    .pipe(sourcemaps.init())
    .pipe(rollup({
      external: ['eagle', 'jquery'],
      plugins: [
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(), // converts date-fns to ES modules
        babel()
      ]
    }, {
        format: 'umd'
      }))
    .pipe(sourcemaps.write('../maps/', { addComment: false }))
    .pipe(gulp.dest('dist'));
});