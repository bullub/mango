export default {
  getAccessEnvironment
};

const ENVS = ['dev', 'stg', 'uat', 'prd'];

/**
 * 获取当前构建的访问环境
 * @returns {String} 拿到当前访问环境字符串
 */
function getAccessEnvironment() {
  let env = process.argv[2];

  if (env.startsWith('--')) {
    env = env.slice(2);
  }

  if (ENVS.indexOf(env) === -1) {
    // console.warn('无合适的构建环境，默认为dev环境');
    env = ENVS[0];
  }

  return env;
}