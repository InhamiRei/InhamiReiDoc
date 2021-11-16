## 通过数据驱动改变页面

- React 不建议你直接操作 DOM 元素,而是要通过数据进行驱动，改变界面中的效果。React 会根据数据的变化，自动的帮助你完成界面的改变。所以在写 React 代码时，你无需关注 DOM 相关的操作，只需要关注数据的操作就可以了

```js
import React, { Component, Fragment } from "react";

class App extends Component {
  constructor(props) {
    //调用父类的构造函数，固定写法
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  render() {
    return (
      <Fragment>
        <div>Hello React</div>
        <input value={this.state.inputValue} onChange={this.inputChange} />
      </Fragment>
    );
  }
}

export default App;
```

## 绑定事件

- 绑定响应事件，改变 inputValue 的值

```js
inputChange(e){
  console.log(e.target.value);
}
```

## 错误的修改值写法

```js
inputChange(e){
  console.log(e.target.value);
  this.state.inputValue=e.target.value;
}
```

## 正确的修改值写法

- this 指向不对，用 bind 设置一下指向
- React 中改变值需要使用 this.setState 方法

```js{11-15,21}
import React, { Component, Fragment } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:''
    }
  }

  inputChange(e){
    this.setState({
        inputValue:e.target.value
    })
  }

  render(){
    return (
      <Fragment>
        <div>Hello React</div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
      </Fragment>
    )
  }
}

export default App
```

## 让列表自动化

- 添加一个食物列表

```js{5}
constructor(props) {
  super(props);
  this.state = {
    inputValue: "",
    food: ["苹果", "西瓜"],
  };
}
```

```js{4-8}
render() {
  return (
    <Fragment>
      <ul>
        {this.state.food.map((item, index) => {
          return <li key={item + index}>{item}</li>;
        })}
      </ul>
    </Fragment>
  );
}
```

## 添加数据

```js
<button onClick={this.addFood.bind(this)}>增加食物</button>
```

- ...为 ES6 的新语法，扩展运算符，意思就是把 list 数组进行了分解，形成了新的数组，然后再进行组合

```js
addFood() {
  this.setState({
    food: [...this.state.food, this.state.inputValue],
  });
}
```

- 如果 ul 不添加 key 值会报错，所以采取{item+index}的方法先
- 完整代码如下：

```js{31}
import React, { Component, Fragment } from "react";

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

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addFood.bind(this)}>增加食物</button>
        <ul>
          {this.state.food.map((item, index) => {
            return <li key={item + index}>{item}</li>;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default App;
```

## 删除数据

- 获得下标然后用 splice 删除即可

```js{9}
render() {
  return (
    <Fragment>
      <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
      <button onClick={this.addFood.bind(this)}>增加食物</button>
      <ul>
        {this.state.food.map((item, index) => {
          return (
            <li key={item + index} onClick={this.deleteFood.bind(this, index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
```

```js
deleteFood(index) {
  let food = this.state.food;
  food.splice(index, 1);
  this.setState({
    food: food,
  });
}
```

- 注意不要直接操作 state 的数据，后期的性能优化上会有很多麻烦，以下是错误的写法

```js
deleteItem(index){
  this.state.food.splice(index,1)
  this.setState({
      food:this.state.food
  })
}
```
