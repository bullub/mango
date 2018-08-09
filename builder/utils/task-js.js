// gulp与rollup结合使用的gulp插件
import rollup from 'gulp-better-rollup3';
// rollup打包部分会使用到的构建工具
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

import errorHandler from './error-handler';
import plumber from 'gulp-plumber';

import sourcemaps from 'gulp-sourcemaps';

import environment from './environment';

import gulp from 'gulp';

import eslint from 'gulp-eslint';
// import configer from './config';

const accessEnvironment = environment.getAccessEnvironment();
// const config = configer.getConfig();

const rollupPlugins = [
  // tells Rollup how to find date-fns in node_modules
  resolve(),
  // converts date-fns to ES modules
  commonjs(),
  // converts ES5+ to ES5
  babel()
];

// UAT和PRD环境开启uglify
if (accessEnvironment === 'uat' || accessEnvironment === 'prd') {
  rollupPlugins.push(uglify())
}

export default taskJS;

function taskJS() {
  return gulp.src('src/**/*.js')
    .pipe(plumber({
      errorHandler
    }))
    .pipe(eslint())
    .pipe(sourcemaps.init())
    .pipe(rollup({
      cache: false,
      rollup: require('rollup'),
      external: ['eagle', 'jquery'],
      plugins: rollupPlugins
    }, {
      name: '_',
      format: 'iife'
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./dist'));
}