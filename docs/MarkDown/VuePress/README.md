## 提示

::: tip 提示
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

```markdown
::: tip 提示
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::
```

## 代码块

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

```markdown
::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

## Emoji

:tada: :100:

```markdown
:tada: :100:
```

## 代码高亮

- 行数区间: 例如 {5-8}, {3-10}, {10-17}
- 多个单行: 例如 {4,7,9}
- 行数区间与多个单行: 例如 {4,7-13,16,23-27,40}

````markdown
```js {4}
export default {
  data() {
    return {
      msg: "Highlighted!",
    };
  },
};
```
````
