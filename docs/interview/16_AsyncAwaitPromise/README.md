## async 执行顺序

```js
async function test1() {
  console.log("test1 begin"); // 2
  const result = await test2(); // await后面的代码可以看成异步
  console.log("result", result); // 5 result undefined
  console.log("test1 end"); // 6
}

async function test2() {
  console.log("test2"); // 3
}

console.log("script begin"); // 1
test1();
console.log("script end"); // 4
```

## 执行 async 函数，返回的都是 Promise 对象

```js
async function test1() {
  return 1;
}
async function test2() {
  return Promise.resolve(2);
}
```

## Promise.then 成功的情况对应 await

- 输出都是 data 3

```js
async function test3() {
  const p3 = Promise.resolve(3);
  p3.then((data) => {
    console.log("data", data);
  });

  const data = await p3;
  console.log("data", data);
}

test3();
```

- await 后面跟一个数字

```js
async function test4() {
  const data4 = await 4; // await Promise.resolve(4);
  console.log("data4", data4);
}

test4();
```

- await 后面跟一个函数

```js
async function test1() {
  return 1;
}

async function test5() {
  const data5 = await test1();
  console.log("data5", data5);
}

test5();
```

## Promise.catch 异常的情况对应 try...catch

- 输出结果：e 6

```js
async function test6() {
  const p6 = Promise.reject(6);

  try {
    const data6 = await p6;
    console.log("data6", data6);
  } catch (e) {
    console.error("e", e);
  }
}

test6();
```
