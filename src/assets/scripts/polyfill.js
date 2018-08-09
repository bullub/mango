//Number的toFixed方法在各浏览器上表现不一致，也并非完全符合银行家舍入，而是更可能是浮点数精度问题引起的问题
//使用Math库字形实现并覆盖toFixed方法,使其表现为四舍五入
//eslint-disable-next-line
Number.prototype.toFixed = function toFixed(decimal = 0) {

  let val = this.valueOf();

  // 如果不是一个数字的话，则保持与原生一致
  if (isNaN(val)) {
    return "NaN";
  }

  let value = val;

  if (decimal === 0) {
    return Math.round(val) + "";
  }

  if (val < 1 && val >= 0) {
    //对于值在[0,1)区间的值,直接做加1操作,让这种类型的值在[1, +∞)的区间进行计算,避免麻烦
    value += 1;
  } else if (val < 0 && val > -1) {
    //对于值在(-1,0)区间的值,直接做减1操作,让这种类型的值在(-∞, -1)的区间进行计算,避免麻烦
    value -= 1;
  }

  //放大之后并进行过四舍五入的数字
  let multipleNumber = Math.round(value * Math.pow(10, decimal)) + "";

  //定义当前小数点的位置为
  let multipleNumberArr = Array.prototype.slice.call(multipleNumber);

  //将小数点插入到对应位置
  multipleNumberArr.splice(-decimal, 0, ".");

  //(-1,0)和[0,1)区间的值做特殊处理
  if (val < 1 && val >= 0) {
    multipleNumberArr[0] = "0";
  } else if (val > -1 && val < 0) {
    multipleNumberArr[1] = "0";
  }

  return multipleNumberArr.join('');
}