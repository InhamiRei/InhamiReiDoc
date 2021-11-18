## 闭包

- 闭包：一个函数和它周围状态的引用捆绑在一起的组合

## 例 1：函数作为返回值

- 会在函数定义的地方查找 a，而不是执行的地方查找 a，所以 a 为 1

```js
function test() {
  const a = 1;
  return function () {
    console.log("a", a);
  };
}

const fn = test();
const a = 2;
fn();
```

## 例 2：函数作为参数

- 因为 fn 定义的地方并没有定义 a 的值，所以向上查询查全局的，所以 a 为 2

```js
function test(fn) {
  const a = 1;
  fn();
}

const a = 2;
function fn() {
  console.log("a", a);
}

test(fn);
```
