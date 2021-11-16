## 在父组件引用子组件

- 在 App.js 同级创建一个子组件 testComp.js

```js
// testComp.js
import React, { Component } from "react";

class FoodItem extends Component {
  render() {
    return <li>新加的食物</li>;
  }
}

export default FoodItem;
```

```js
// App.js
import FoodItem from "./testComp";

render() {
  return (
    <Fragment>
      <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
      <button onClick={this.addFood.bind(this)}>增加食物</button>
      <ul>
        {this.state.food.map((item, index) => {
          return (
            <FoodItem key={item + index} />
          );
        })}
      </ul>
    </Fragment>
  );
}
```

## 父组件向子组件传值

- 父组件向子组件传递内容，靠属性的形式传递

```js
// App.js
<FoodItem key={item + index} content={item} />
```

```js{8}
// testComp.js
class FoodItem extends Component {
  handleClick() {
    console.log("子传父方法");
  }

  render() {
    return <li>新加的食物+{this.props.content}</li>;
  }
}
```

## 子组件调用父组件的方法

- 子组件调用父组件的删除方法
- 首先父组件要往子组件传递下标 index

```js
// App.js
<FoodItem key={item + index} content={item} index={index} />
```

- 用 bind 绑定 this

```js
// testComp.js
return <li onClick={this.handleClick.bind(this)}>新加的食物+{this.props.content}</li>;
```

- 构造函数中绑定性能会高一些，特别是在高级组件开发中，会有很大的作用

```js{5-8,15}
// testComp.js
import React, { Component } from "react";

class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.index);
  }

  render() {
    return <li onClick={this.handleClick}>新加的食物+{this.props.content}</li>;
  }
}

export default FoodItem;
```

```js
// App.js
{
  this.state.food.map((item, index) => {
    return <FoodItem key={index + item} content={item} index={index} deleteFood={this.deleteFood.bind(this)} />;
  });
}
```

```js
// testComp.js
handleClick() {
  console.log(this.props.index);
  this.props.deleteFood(this.props.index);
}
```

## 完整代码

```js
// App.js
import React, { Component, Fragment } from "react";
import FoodItem from "./testComp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      food: ["苹果", "西瓜"],
    };
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  addFood() {
    this.setState({
      food: [...this.state.food, this.state.inputValue],
    });
  }

  deleteFood(index) {
    let food = this.state.food;
    food.splice(index, 1);
    this.setState({
      food: food,
    });
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addFood.bind(this)}>增加食物</button>
        <ul>
          {this.state.food.map((item, index) => {
            return <FoodItem key={index + item} content={item} index={index} deleteFood={this.deleteFood.bind(this)} />;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default App;
```

```js
// testComp.js
import React, { Component } from "react";

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
    return <li onClick={this.handleClick}>新加的食物+{this.props.content}</li>;
  }
}

export default FoodItem;
```
