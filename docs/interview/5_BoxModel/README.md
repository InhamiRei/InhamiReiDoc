## IE 盒模型 border-box

- 200px 宽度

```css
#box {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
```

## W3C 盒模型 content-box

- 222px 宽度

```css
#box {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  box-sizing: content-box;
}
```

## box-sizing: inherit;

- border-sizing 另一个值：从父元素继承 box-sizing 属性的值
