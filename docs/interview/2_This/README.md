## 指向 window

- 在全局作用域或者普通的函数中，以及定时器等，this 指向全局对象的 window

```js
console.log(this); // window
```

- fn()可以看做是 window.fn()

```js
function fn() {
  console.log(this); // window
}
fn();
```

- setTimeout 可以看成是 window.setTimeout

```js
setTimeout(function () {
  console.log(this); // window
}, 1000);
```

## 指向调用方法的对象

- 在方法的调用中，谁调用了这个方法，this 就指向谁

```js
var fn = {
  myFun: function () {
    console.log(this); // this指向的是fn这个对象
  },
};
fn.myFun();
```

```js
var btn = document.querySelector("button");

btn.onclick = function () {
  console.log(this); // this指向的是btn
};

btn.addEventListener("click", function () {
  console.log(this); // this指向的是btn
});
```

## 指向构造函数实例

```js
function Fun() {
  console.log(this); // this指向fun实例对象
}
var fun = new Fun();
```

## this 指向的例子

```js
var btn = document.querySelector("button");
var time = 3; // 定义剩下的秒数

btn.addEventListener("click", function () {
  // 这里的btn可以改成this，因为是指向btn
  btn.disabled = true;
  var timer = setInterval(function () {
    if (time == 0) {
      // 清除定时器和复原按钮
      clearInterval(timer);
      // 这里的btn不能改成this，因为这里用this的话在定时器里面，是指向window的
      btn.disabled = false;
      btn.innerHTML = "发送";
    } else {
      btn.innerHTML = "还剩下" + time + "秒";
      time--;
    }
  }, 1000);
});
```
