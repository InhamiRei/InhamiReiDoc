## flex

```css
.box {
    display: flex;
    align-items: center;
}
```

## position

```css
.box {
    width: 100px;
    height: 100px;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
}
```

## margin

```css
.box {
    width: 100px;
    height: 100px;
    margin-top: calc(50% - 50px);
    margin-left: calc(50% - 50px);
}
```

## transform

```html
<div class="box">
    <div class="sbox"></div>
</div>
```

```css
.box {
    width: 500px;
    height: 500px;
    background-color: red;
}

.sbox {
    position: relative;
    top: 50%;
    width: 100px;
    height: 100px;
    background: #393;
    transform: translateY(-50%);
}

## line-height

```css
.box {
    height: 100px;
    line-height: 100px;
}
```