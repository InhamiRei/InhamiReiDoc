## 1.组件

- App.js

```js
import React, { Component } from "react";

class App extends Component {
  render() {
    return <div>Hello React</div>;
  }
}

export default App;
```

- index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

- 解构赋值

```js{1}
import React, { Component } from 'react'
import React from 'react'
const Component = React.Component
```

## 2.Fragment 标签

- JSX 语法需要最外层有个 div 包裹，但是有的时候用 flex 的时候不想要有 div 包裹
- 这个时候可以使用 Fragment 标签

```js{1}
import React, { Component } from 'react'
import React, { Component, Fragment } from 'react'

class App extends Component{
  render(){
    return (
      <Fragment>
        <div>Hello React</div>
      </Fragment>
    )
  }
}

export default App
```

## 3.JSX 的注释

```jsx
{
  /* 正确注释的写法 */
}
```

```jsx
{
  // 正确注释的写法
}
```

## 4.JSX 的 class

- class 要写成 className

```jsx
<p className="input"></p>
```

## 5.JSX 的 label

- label 里不能用 for, 得用 htmlFor

```jsx
<label htmlFor="jsxx">123</label>
```

## 6.函数式编程

- 函数式编程的好处是什么？

1. 函数式编程让我们的代码更清晰，每个功能都是一个函数。
2. 函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试。

## 7.生命周期优化性能

- 在子组件 console.log 后发现每次都会执行 render
- 并且父组件输入框输入内容就会执行 render

```js
render() {
  console.log("child -- render");
  return <li onClick={this.handleClick}>新加的食物+{this.props.content}</li>;
}
```

- 加入生命周期函数 shouldComponentUpdate：
- nextProps:变化后的属性
- nextState:变化后的状态

```js{17-23}
class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.index);
    this.props.deleteFood(this.props.index);
  }

  render() {
    console.log("child -- render");
    return <li onClick={this.handleClick}>新加的食物+{this.props.content}</li>;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
}
```

## 8.axios 数据请求

- 先安装 axios

```
npm install -save axios
```

```js
// App.js
import axios from "axios";

componentDidMount() {
  axios
    .post("https://i.snssdk.com/log/sentry/v2/api/slardar/batch/")
    .then((res) => {
      console.log("axios 获取数据成功:" + JSON.stringify(res));
    })
    .catch((error) => {
      console.log("axios 获取数据失败" + error);
    });
}
```
