## BFC

- Block Formatting Context 块级格式化上下文

- 形成独立的渲染区域，内部元素的渲染不会影响外界

## 形成 BFC 常见条件

- 浮动元素 float 不是 none

- 绝对定位元素 position 是 absolute 或 fixed

- 块级元素 overflow 不是 visible

- flex 元素

- inline-block 元素

## 应用场景

- 清除浮动等

```html
<div class="container">
  <img src="home.png" alt="" />
  <p>12345</p>
</div>
```

```css
.container {
  background-color: #ccc;
}

.container img {
  float: left;
  width: 300px;
}
```

<div align="center">
    <img :src="$withBase('/img/interview/BFC_1.png')" alt="BFC_1.png">
</div>

<div align="center">
    <img :src="$withBase('/img/interview/BFC_2.png')" alt="BFC_2.png">
</div>

- 加上 BFC 后

```html {1,3}
<div class="container bfc">
  <img src="home.png" alt="" />
  <p class="bfc">12345</p>
</div>
```

```css {10,11,12}
.container {
  background-color: #ccc;
}

.container img {
  float: left;
  width: 300px;
}

.bfc {
  overflow: hidden;
}
```

- container 会自动渲染为 img 的高度，p 标签会渲染为只有右边的宽度

<div align="center">
    <img :src="$withBase('/img/interview/BFC_3.png')" alt="BFC_3.png">
</div>

<div align="center">
    <img :src="$withBase('/img/interview/BFC_4.png')" alt="BFC_4.png">
</div>
