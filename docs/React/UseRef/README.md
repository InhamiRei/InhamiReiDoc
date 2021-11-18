## 代替 e.target.value

- 用 ref+箭头函数进行绑定

```js{4-6}
<input
  value={this.state.inputValue}
  onChange={this.inputChange.bind(this)}
  ref={(input) => {
    this.input = input;
  }}
/>
```

- 改变 inputChange 方法

```js{3}
inputChange(e) {
  this.setState({
    inputValue: e.target.value,
    inputValue: this.input.value,
  });
}
```

- PS:不建议用 ref 这样操作的，因为 React 的是数据驱动的，所以用 ref 会出现各种问题

## ref 使用的坑

- 获取食物数量需要绑定 ul

```js{10}
<Fragment>
  <input
    value={this.state.inputValue}
    onChange={this.inputChange.bind(this)}
    ref={(input) => {
      this.input = input;
    }}
  />
  <button onClick={this.addFood.bind(this)}>增加食物</button>
  <ul ref={(ul) => (this.ul = ul)}>
    {this.state.food.map((item, index) => {
      return <FoodItem key={index + item} content={item} index={index} deleteFood={this.deleteFood.bind(this)} />;
    })}
  </ul>
</Fragment>
```

- 每次添加一个食物都打印所有食物的总数

```js{5}
addFood() {
  this.setState({
    food: [...this.state.food, this.state.inputValue],
  });
  console.log(this.ul.querySelectorAll("li").length);
}
```

- 这时候显示的食物总数会少一个，比如 3 个食物 console.log 只有 2 个
- 这个坑是因为 React 中更多 setState 是一个异步函数所造成的
- 也就是这个 setState，代码执行是有一个时间的
- 简单的说，就是因为是异步，还没等虚拟 Dom 渲染，console.log 就已经执行了
- setState 方法提供了一个回调函数，也就是它的第二个函数

```js{6-8}
addFood() {
  this.setState(
    {
      food: [...this.state.food, this.state.inputValue],
    },
    () => {
      console.log(this.ul.querySelectorAll("li").length);
    }
  );
}
```

## 完整代码

```js{16,25-27,45-47,50}
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
      // inputValue: e.target.value,
      inputValue: this.input.value,
    });
  }

  addFood() {
    this.setState(
      {
        food: [...this.state.food, this.state.inputValue],
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
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
        <input
          value={this.state.inputValue}
          onChange={this.inputChange.bind(this)}
          ref={(input) => {
            this.input = input;
          }}
        />
        <button onClick={this.addFood.bind(this)}>增加食物</button>
        <ul ref={(ul) => (this.ul = ul)}>
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
