## 题目

- 给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那   两个   整数，并返回它们的数组下标。
- 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

```js
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
```

## 解答

```js
var twoSum = function (nums, target) {
  //暴力枚举
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

```js
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i];
    if (map.has(dif)) {
      return [map.get(dif), i];
    }
    map.set(nums[i], i);
  }
};
```

## 笔记

- js map 用法

```js
// 声明
var map = new Map();
// 设值
map.set("key", "value");
// 取值
map.get("key");
// 判断key是否存在
map.has("key");
// 删除key
map.delete("key");
```
