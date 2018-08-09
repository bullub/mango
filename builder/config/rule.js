/**
 * 短路径规则定义文件
 */
export default {
  csscore: [],
  jscore: [
    {
      name: 'js',
      value: ['polyfill']
    },
    {
      name: 'njs',
      value: [
        'jquery/dist/jquery',
        'eagle/dist/eagle.umd'
      ]
    }
  ]
};