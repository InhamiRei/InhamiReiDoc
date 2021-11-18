## 生命周期图解

- **四大阶段**：

1. Initialization：初始化阶段
2. Mounting：挂载阶段
3. Updation：更新阶段
4. Unmounting：销毁阶段

<div align="center">
  <img :src="$withBase('/img/react/生命周期_1.jpg')" alt="生命周期_1.jpg">
</div>

## 生命周期解释

- **生命周期函数指在某一个时刻组件会自动调用执行的函数**
- render()函数，就是一个生命周期函数，它在 state 发生改变时自动执行。这就是一个标准的自动执行函数
- constructor 不算生命周期函数，算是构造函数，它是 ES6 的基本语法，虽然它和生命周期函数的性质一样，但不能认为是生命周期函数
- 可以把它当成一个生命周期函数，看成 React 的 Initialization 阶段，定义属性（props）和状态(state)

## Mounting 阶段

- Mounting 阶段叫挂载阶段，伴随着整个虚拟 DOM 的生成，它里边有三个小的生命周期函数，分别是：

1. componentWillMount : 在组件即将被挂载到页面的时刻执行
2. render : 页面 state 或 props 发生变化时执行
3. componentDidMount : 组件挂载完成时被执行

- **componentWillMount 和 componentDidMount 这两个生命周期函数，只在页面刷新时执行一次，而 render 函数是只要有 state 和 props 变化就会执行**

## Updation 阶段

### shouldComponentUpdate 函数

- shouldComponentUpdate 函数会在组件更新之前，自动被执行
- 现在就可以在控制台 console 里看到结果了，并且结果是每次文本框发生改变时都会随着改变。如果你返回了 false，这组件就不会进行更新了。 简单点说，就是返回 true，就同意组件更新;返回 false,就反对组件更新

```js
shouldComponentUpdate(){
  console.log('shouldComponentUpdate---组件发生改变前执行')
  return true
}
```

### componentWillUpdate 函数

- componentWillUpdate 在组件更新之前，在 shouldComponenUpdate 之后被执行。但是如果 shouldComponentUpdate 返回 false，这个函数就不会被执行了

```js
//shouldComponentUpdate返回true才会被执行。
componentWillUpdate(){
  console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
}
```

### componentDidUpdate 函数

- componentDidUpdate 在组件更新之后执行，它是组件更新的最后一个环节

```js
componentDidUpdate(){
  console.log('componentDidUpdate----组件更新之后执行')
}
```

### componentWillReceiveProps 函数

- 如果组件是顶层组件的话是不会执行的，因为他并没有接收任何的 props
- 子组件接收到父组件传递过来的参数，父组件 render 函数重新被执行，这个生命周期就会被执行
- 也就是说这个组件第一次存在于 Dom 中，函数是不会被执行的
- 如果已经存在于 Dom 中，函数才会被执行

```js
componentWillReceiveProps(){
  console.log('child - componentWillReceiveProps')
}
```

## Unmounting

### componentWillUnmount 函数

```js
//当组件从页面中删除的时候执行
componentWillUnmount(){
    console.log('child - componentWillUnmount')
}
```
