## 题目

+ arr = ['小红', '你大红', '苏大强', '宝'];
+ Array.some和forEach的区别

## forEach

+ forEach循环一旦开始，无法在中间被停止，因此如果数据量大，性能差

```js
arr.forEach((item, index) => {
    if(item === '苏大强') {
        console.log(index);
    }
})
```

## Array.some

+ 在找到对应的值后，可以通过return true固定语法，来终止some循环

```js
arr.some((item, index) => {
    if(item === '苏大强') {
        console.log(index);
        return true;
    }
})
```

## some和every

+ some方法，只要有一个true，结果就会返回true
+ every方法，必须全部返回true，结果才会返回true

