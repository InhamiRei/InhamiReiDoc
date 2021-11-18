## Array.isArray

- 判断是否是数组

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
```

## Array.push

- 数组后追加新元素，改变原数组

```js
var array = ["1", "2", "3"];
array.push("4"); // 1 2 3 4
```

## Array.unshift

- 数组前追加新元素，改变原数组

```js
var array = ["1", "2", "3"];
array.unshift("4"); // 4 1 2 3
```

## Array.pop

- 删除数组最后一个元素,一次删除一个,改变原数组

```js
var array = ["1", "2", "3"];
array.pop(); // 3
array; // 1 2
```

## Array.shift

- 删除数组第一个元素,一次删除一个,改变原数组

```js
var array = ["1", "2", "3"];
array.shift(); // 1
array; // 2 3
```

## Array.reverse

- 颠倒数组元素顺序

```js
const a = [1, 2, 3];
a.reverse();
console.log(a); // [3, 2, 1]
```

## Array.sort

- 数组排序
- return a - b 为升序，return b - a 为降序

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]
```

## Array.indexOf

- 数组中查找第一个索引

```js
var arr = ["1", "2", "3", "1"];
console.log(arr.indexOf("2")); // 1
console.log(arr.indexOf("4")); // -1
```

## Array.lastIndexOf

- 数组中查找索引，后往前查

```js
var arr = ["1", "2", "3", "1"];
console.log(arr.lastIndexOf("1")); // 3
console.log(arr.lastIndexOf("4")); // -1
```

## Array.toString

- 数组转换字符串，逗号分隔

```js
var arr = [1, 2, 3];
console.log(arr.toString()); // '1,2,3'
```

## Array.join

- 数组转换字符串，join('分隔符')，默认逗号

```js
var arr = [1, 2, 3];
console.log(arr.join()); // '1,2,3'
console.log(arr.join("-")); // '1-2-3'
```

## Array.concat

- 连接两个数组，不影响原数组

```js
var alpha = ["a", "b", "c"];
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]

var num1 = [[1]];
var num2 = [2, [3]];
var nums = num1.concat(num2);
console.log(nums); // results is [[1], 2, [3]]
```

## Array.slice

- 截取数组，返回被截取的数组，不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

## Array.splice

- 删除数组，返回被删除的数组，影响原数组

```js
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素: ["drum"]
```

## Array.some

- 测试数组中是不是至少有 1 个元素通过了被提供的函数测试，返回一个 Boolean 类型
- 检测数组中是否有元素大于 10

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

- 可以用箭头函数简写

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

## Array.every

- 测试数组中是不是全部元素通过了被提供的函数测试，返回一个 Boolean 类型
- 例 1：检测数组中的所有元素是否都大于 10

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

```js
[12, 5, 8, 130, 44].every((x) => x >= 10); // false
[12, 54, 18, 130, 44].every((x) => x >= 10); // true
```

- 例 2：判断水果是否都被选中

```js
const arr = [
  { id: 1, name: "西瓜", state: true },
  { id: 2, name: "榴莲", state: true },
  { id: 3, name: "草莓", state: true },
];

const result = arr.every((item) => item.state);
// const = arr.every( item => item.state === true );
```

## Array.reduce

- 参数：
- accumulator 累计器
- currentValue 当前值
- currentIndex 当前索引
- array 数组

- 例 1：

```js
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
```

| callback    | accumulator | currentValue | currentIndex | currentIndex    | return value |
| ----------- | ----------- | ------------ | ------------ | --------------- | ------------ |
| first call  | 0           | 1            | 1            | [0, 1, 2, 3, 4] | 1            |
| second call | 1           | 2            | 2            | [0, 1, 2, 3, 4] | 3            |
| third call  | 3           | 3            | 3            | [0, 1, 2, 3, 4] | 6            |
| fourth call | 6           | 4            | 4            | [0, 1, 2, 3, 4] | 10           |

- 箭头函数简写

```js
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);
```

- 例 2：

```js
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);
// 和为 0+1+2+3+10=16
```

- 箭头函数简写

```js
var total = [0, 1, 2, 3].reduce((acc, cur) => acc + cur, 10);
```

- 例 3：把购物车数组中，已勾选的水果，总价累加起来

```js
const arr = [
    { id: 1, name: '西瓜', state: true, price: 10, count: 1 },
    { id: 2, name: '榴莲', state: true, price: 80, count: 2 },
    { id: 3, name: '草莓', state: true, price: 20, count: 3 }
]

arr.filter(item => item.state).reduce((累加的结果，当前循环项) => {}, 初始值)
arr.filter(item => item.state).reduce((amt, item) => {
    return amt += item.price * item.count;
}, 0)
```

- 箭头函数简写

```js
arr.filter((item) => item.state).reduce((amt, item) => (amt += item.price * item.count), 0);
```

- 例 4：将二维数组转化为一维

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
```

- 箭头函数简写

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, cur) => acc.concat(cur), []);
```
