export default {
  getAccessEnvironment
};

/**
 * 获取当前构建的访问环境
 * @returns {String} 拿到当前访问环境字符串
 */
function getAccessEnvironment() {
  let argStr = process.argv.join('');

  console.log(argStr);

  let accessMatch = argStr.match(/--(\w{3})/i);

  if (!accessMatch || !accessMatch[1]) {
    throw new Error("未指定访问环境，请指定构建的访问环境: --[dev|stg|uat|prd]");
  }

  return accessMatch[1];
}