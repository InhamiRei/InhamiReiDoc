## 闭包

+ 闭包：一个函数和它周围状态的引用捆绑在一起的组合

## 例1：函数作为返回值

+ 会在函数定义的地方查找a，而不是执行的地方查找a，所以a为1

```js
function test() {
    const a = 1;
    return function() {
        console.log('a', a);
    }
}

const fn = test();
const a = 2;
fn();
```

## 例2：函数作为参数

+ 因为fn定义的地方并没有定义a的值，所以向上查询查全局的，所以a为2

```js
function test(fn) {
    const a = 1;
    fn();
}

const a = 2;
function fn() {
    console.log('a', a);
}

test(fn);
```