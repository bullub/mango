export default {
  getAccessEnvironment
};

/**
 * 获取当前构建的访问环境
 */
function getAccessEnvironment() {
  let argStr = process.argv.join('||');

  let accessMatch = argStr.match(/||--(\w{3})||/i);

  debugger;

}