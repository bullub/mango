/**
 * 基础构建配置信息
 */
export default {
  cssMinOptions: {
    //深度优化开关，启动深度优化，可能会导致部分样式被清理
    advanced: false,
    //混淆压缩的时候，不重写图片路径
    rebase: false
  },
  imageMinOptions: {
    //类型：Number  默认：3  取值范围：0-7（优化等级）
    optimizationLevel: 0,
    //类型：Boolean 默认：false 无损压缩jpg图片
    progressive: true,
    //类型：Boolean 默认：false 隔行扫描gif进行渲染
    interlaced: true,
    //类型：Boolean 默认：false 多次优化svg直到完全优化
    multipass: true,
    //不要移除svg的viewbox属性
    svgoPlugins: [{ removeViewBox: false }]
  },
  rollupOptions: {

  },
  // 构建Zip包
  zip: {
    // 是否启用
    enable: true,
    // 构建包时的配置
    options: {
      //打出的zip包名
      nameFormat: '{runtime}_{environment}_{currentTime(YYYYMMDDHHmmss)}.zip',
      //排除的文件
      exclude: [
        //排除用于调试的登录界面
        'jy/login.html',
        'jy/js/login.js',
        //排除所有的模板目录和文件
        'public/tpl',
        'public/tpl/**/*',
        'jy/tpl',
        'jy/tpl/**/*',
        'templates',
        'templates/**/*',
        'assets/templates',
        'assets/templates/**/*',
        "**/*.txt"
      ]
    }
  },
};