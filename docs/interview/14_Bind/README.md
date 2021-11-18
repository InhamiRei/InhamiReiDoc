## bind 函数特点

- 1.改变 this 的指向
- 2.第一个参数是 this 的值，后面的参数是函数接收的参数值
- 3.返回值不变

## 简单的 bind 函数

```js
function test() {
  console.log("this", this);
  return "返回值";
}

// 普通执行
const result = test();

// 通过bind函数改变this指向
const boundTest = test.bind({ name: "哈默" });
// 改变后执行
const boundResult = boundTest();
```

## 带参数的 bind 函数

```js
function test(a, b, c) {
  console.log("this", this);
  return "返回值";
}

// 普通执行
const result = test(1, 10, 11);

// 通过bind函数改变this指向
const boundTest = test.bind({ name: "哈默" }, 7, 77, 777);
// 改变后执行
const boundResult = boundTest();

console.log("result", result);
console.log("boundResult", boundResult);
// 都会输出 '返回值'
```

## 手写 bind 函数

```js
Function.prototype.myBind = function () {
  const self = this;
  const args = Array.prototype.slice.call(arguments);

  const thisValue = args.shift();

  return function () {
    return self.apply(thisValue, args);
  };
};
```
