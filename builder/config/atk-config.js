/**
 * 基础构建配置信息
 */
export default {
  directiveName: 'ax',
  envSetting: {},
  includePaths: {
    "js": ["assets/scripts", "scripts"],
    "css": ["assets"],
    "tpl": ["templates", "assets/templates", "assets"]
  },
  // atk伪指令对应的文件扩展名
  directiveExtensions: {
    tpl: ".ejs",
  },
  // 第三方依赖拷贝到的位置
  thirdDepDist: {
    npm: "assets/npm"
  }
};