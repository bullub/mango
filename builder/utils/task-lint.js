// 使用eslint做代码风格检查
import eslint from 'gulp-eslint';

function lint(stream) {
  return stream.pipe(eslint())
}

export default {
  lint
};