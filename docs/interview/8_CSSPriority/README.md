## CSS 选择器优先级顺序

- !important:应用到样式，优先级最高

- 内联样式：1000

```html
<div style="width: 100px;height: 100px;color: red;"></div>
```

- ID 选择器：100

```css
#box {
  background-color: red;
}
```

- 类选择器，属性选择器，伪类选择器：10

```css
// 类选择器
.box {
  background-color: red;
}

// 属性选择器
[title] {
  color: blue;
}

// 伪类选择器
a:hover {
  color: #ff00ff;
}
```

- 元素选择器，关系选择器，伪元素选择器：1

```css
// 元素选择器
h1 {
  color: blue;
}

// 关系选择器
ul > li {
  color: red;
}

// 伪元素选择器
a:before {
  content: "";
}
```

- 通配符选择器：0

```css
* {
  margin: 0;
  padding: 0;
}
```

## 权重计算

```
// 1+1+1=3
ul ol+li  {}

// 1+1=2
li:first-line {}
```
