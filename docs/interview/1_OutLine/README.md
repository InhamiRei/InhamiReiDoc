## 1.介绍js的基本数据类型

+ String，Number，Boolean，Null，Undefined

## 2.instanceof 和 typeof

```js
const object = {};
const array = [];

console.log(null); // object
console.log('result object(typeof) -', typeof object); // object
console.log('result array(typeof) -', typeof array); // object

const flagObject = object instanceof Array;
const flagArray = object instanceof Array;

console.log('result object(typeof) -', flagObject); // false
console.log('result array(typeof) -', flagArray); // true
```

## 3.水平居中

+ 行内inline元素：在父级添加text-align: center;
+ 块级元素block：margin: 0 auto;
+ absolute定位元素：left: 50%;margin-left: 负值;

## 4.HTML 语义化

+ 让人更容易理解代码（提高代码可读性）
+ 让搜索引擎的爬虫程序更容易理解代码

## 5.块级元素，内联元素

::: tip
+ 块级元素 display: block / table
+ 特点：独占一行，不管内容的长度
+ div h1(hx) p ul li table form
:::

::: tip
+ 内联元素 display: inline / inline-block
+ 特点：不会独占一格，会紧跟着排列，直到没有足够的空间
+ span strong label a img input select textarea iframe
:::

## 6.line-height继承

+ 1.具体数值：如50px，会直接继承
+ 2.比例：如1.5，会直接继承
+ 3.百分比：如200%，会先和font-size相乘得到数值后才会继承，不会直接继承200%


## 7.em，rem，px

+ px：绝对长度单位
+ em：相对长度单位，相对于父元素
+ rem：相对长度单位，相对于html根元素

## 8.响应式布局

```css
@media (max-width: 787px) {}

@media only screen and (min-width: 787px) {}
```

## 9.Event Loop

<div align="center">
    <img :src="$withBase('/img/interview/EventLoop.png')" alt="EventLoop.png">
</div>

## 10.宏任务和微任务

+ 宏任务：setTimeout，setInterval，DOM事件，AJAX请求
+ 微任务：Promise，async/await
+ 宏任务>DOM渲染>微任务

```js
// 1 4 3 2
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve().then(() => {
    console.log(3);
})

console.log(4);
```

## 11.使用文档碎片减少DOM操作

```js
const list = document.getElemnetById('list');
// 文档碎片
const fragment = document.createDocumentFragment();

for(let i = 0; i < 5; i++) {
    const item = document.createElement('li');
    item.innerHTML = `项目${i}`;
    // list.appendChild(item);
    fragment.appendChild(item);
}

list.appendChild(fragment);
```

## 12.封装绑定事件处理函数

```js
function bindEvent(elem, type, selector, callback) {
    if(callback == null) {
        cb = selector;
        selector = null;
    }
    elem.addEventListener(type, (event) => {
        const target = event.target;
        if(selector) {
            // 在做事件代理
            if(target.matches(selector)) {
                cb.call(target, event);
            }
        } else {
            cb.call(target, event);
        }
    })
}
```