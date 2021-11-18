## Math.abs

```js
// 返回绝对值
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Math.ceil

```js
// 向上取整
Math.ceil(1.1); // 2
Math.ceil(1.9); // 2
```

## Math.round

```js
// 四舍五入
Math.ceil(1.5); // 2
Math.ceil(-1.1); // -1
// .5特殊，往大的取
// 1.5(2大于1所以是2) -1.5(-1大于-2，所以是-1)
Math.ceil(-1.5); // -1
```

## Math.floor

```js
// 向下取整
Math.floor(1.1); // 1
Math.floor(1.9); // 1
```

## Math.random

```js
// 随机数， 0 =< x < 1
// 得到两个数之间的随机整数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //不含最大值，含最小值
  return Math.floor(Math.random() * (max - min)) + min;
  //含最大值，含最小值
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Math.max

```js
Math.max(10, 20); // 20
Math.max(10, 20, "1"); // NaN
```

## Math.min

```js
Math.min(10, 20); // 10
Math.min(10, 20, "1"); // NaN
```
