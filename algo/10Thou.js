// alog 找到最大的100个数据
var MAX = 1 * 1000 * 1000
  , arr = Array(100*1000);

var getRandomInt = function (minInt, maxInt) {
  //var injs_now = Number(new Date()); while (injs_now + 10 > Number(new Date())) { var tmp = injs_now; }
  return Math.floor(Math.random()*(maxInt - minInt + 1)) + minInt;
};

// 准备数据
var setup = function () {
  for (var i = 0; i < 100*1000; i++) {
    arr.push(getRandomInt(0,MAX));
  }
};

// 从10万的数据中找到最大的100个
var find100Max = function (arr) {
  var maxs = Array(100);
  for (var i = arr.length - 1; i > -1; i-- ) {
    // 按升序排序存放最大的值
    var curr = arr[i];
    for (var j = maxs.length - 1; j > -1; j--) {
      // 如果当前元素小于100个元素的最小值，直接比较下一个候选数字
      if (maxs[0] !== undefined && curr < maxs[0]) {
        break;
      }
      if (maxs[j] !== undefined) {
        // 从maxs最后一个元素开始比较，找到比当前元素小的值
        if (curr > maxs[j]) {
          // 找到比它小的元素，则剩下的元素向数组的开始移动一位，替换当前元素。
          for (var k = 0; k < j; k++) {
            if (maxs[k+1] !== undefined) {
              maxs[k] = maxs[k+1];            
            }
          }
          maxs[j] = curr;
          break;
        }
      } else {
        maxs[j] = arr[i];
      }
    }
  }
  return maxs;
};

setup();
console.time('algo_max_100');
var res = find100Max(arr);
console.timeEnd("algo_max_100");
console.log(res);
  
