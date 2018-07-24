import atk from 'gulp-atk';

import configer from './config';

const config = configer.getConfig();

const atkConfig = {
  ...config.atkConfig
};

export default taskAtk;


/**
 * 构建atk流程
 * @param {Stream} stream 参与构建的gulp流
 * @returns {Stream} 返回流过ATK构建器的流
 */
function taskAtk(stream) {
  return stream.pipe(atk(atkConfig));
}

