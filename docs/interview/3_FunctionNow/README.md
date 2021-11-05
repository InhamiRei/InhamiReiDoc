## 概述

+ 立即执行函数是不需要调用，立马可以自己执行的函数
+ 主要作用是创建一个独立的作用域，避免了命名冲突的问题

## 写法1

+ 第二个小括号可以看做是调用函数

```js
(function(){})()
```

```js
(function(a, b) {
    console.log(a + b);
})(1, 2);
```

## 写法2

```js
(function(){}())
```

```js
(function sum(a, b) {
    console.log(a + b);
}(1, 2));
```

## 注意

+ 有多个立即执行函数的话需要用分号隔开，不然会报错

```js
(function(a, b) {
    console.log(a + b);
})(1, 2);
(function sum(a, b) {
    console.log(a + b);
}(1, 2));
```