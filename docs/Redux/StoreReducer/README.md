## 安装 Redux

```
npm install redux --save
```

## 创建 store

- 在 `src` 目录创建 `store`，然后创建 `index.js`

```js
// /store/index.js
import { createStore } from "redux"; // 引入createStore方法
const store = createStore(); // 创建数据存储仓库
export default store; // 导出
```

- 在 `store` 文件夹新建一个 `reducer.js` 文件用来管理

```js
// /store/reducer.js
const defaultState = {
  inputValue: "Write Something",
  list: ["1", "2"],
}; //默认数据

export default (state = defaultState, action) => {
  return state;
};
```

- 这里可能会报错，原因是 `ESlint`，修改一下

```js
// /store/reducer.js
const defaultState = {
  inputValue: "Write Something",
  list: ["1", "2"],
};

const stateStore = (state = defaultState, action) => {
  return state;
};

export default stateStore;
```

- 接着在 `index.js` 引入

```js{2,3}
// /store/index.js
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store
```

## 组件获取 store 的数据

```js{10-11,17,21}
// /src/TodoList.js
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input placeholder={this.state.inputValue} style={{ width: "250px", marginRight: "10px" }} />
          <Button type="primary">增加</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List bordered dataSource={this.state.list} renderItem={(item) => <List.Item>{item}</List.Item>} />
        </div>
      </div>
    );
  }
}
export default TodoList;
```

## 增加 input 响应事件

```js
// /src/TodoList.js
<Input placeholder="Write something" style={{ width: "250px", marginRight: "10px" }} onChange={this.changeInputValue} />
```

- 在 `constructor` 进行 `this` 绑定，修改 `this` 的指向，并下写 `changeInputValue` 的方法

```js
// /src/TodoList.js
constructor(props){
  super(props)
  this.state=store.getState();
  this.changeInputValue= this.changeInputValue.bind(this)
}

changeInputValue(e){
  console.log(e.target.value)
}
```

## 创建 Action

- 想改变 `Redux` 里边 `State` 的值就要创建 `Action` 了。`Action` 就是一个对象，这个对象一般有两个属性，第一个是对 `Action` 的描述，第二个是要改变的值
- `action` 创建好后，需要用 `dispatch()` 的方法传给 `store`

```js
// /src/TodoList.js
changeInputValue(e){
  const action ={
    type:'changeInput',
    value:e.target.value
  }
  store.dispatch(action);
}
```

## store 的自动推送策略

- `store` 只是一个仓库，它并没有管理能力，它会把接收到的 `action` 自动转发给 `Reducer`
- `state`: 指的是原始仓库里的状态。
- `action`: 指的是 `action` 新传递的状态。

- `Reducer` 已经拿到了原来的数据和新传递过来的数据，现在要作的就是改变 `store` 里的值。先判断 `type` 是不是正确的，如果正确，我们需要从新声明一个变量 `newState`。**`Reducer` 里只能接收 `state`，不能改变 `state`**,所以我们声明了一个新变量，然后再次用 `return` 返回回去

```js
// /store/reducer.js
const stateStore = (state = defaultState, action) => {
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state
    newState.inputValue = action.value;
    console.log(state, action);
    return newState;
  }

  return state;
};
```

## 让组件发生更新

- 现在 `store` 里的数据已经更新了，但是组件还没有进行更新，我们需要打开组件文件 `TodoList.js`

```js{5,6,9-11}
// /src/TodoList.js
constructor(prors) {
  super(prors);
  this.state = store.getState();
  this.changeInputValue = this.changeInputValue.bind(this);
  this.storeChange = this.storeChange.bind(this);
  store.subscribe(this.storeChange); // 订阅Redux的状态
}

storeChange(){
  this.setState(store.getState())
}
```

## 完整代码

- /store/index.js

```js
import { createStore } from "redux"; //  引入createStore方法
import reducer from "./reducer";
const store = createStore(reducer); // 创建数据存储仓库
export default store; //暴露出去
```

- /store/reducer.js

```js
const defaultState = {
  inputValue: "Write Something",
  list: ["早上4点起床，锻炼身体", "中午下班游泳一小时"],
};

const stateStore = (state = defaultState, action) => {
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state
    newState.inputValue = action.value;
    console.log(state, action);
    return newState;
  }

  return state;
};

export default stateStore;
```

- /src/TodoList.js

```js
import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store/index";

class TodoList extends Component {
  constructor(prors) {
    super(prors);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange); // 订阅Redux的状态
  }

  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input placeholder="Write something" style={{ width: "250px", marginRight: "10px" }} onChange={this.changeInputValue} />
        <Button type="primary">增加</Button>
        <div style={{ marginTop: "10px", width: "300px" }}>
          <List bordered dataSource={this.state.list} renderItem={(item) => <List.Item>{item}</List.Item>} />
        </div>
      </div>
    );
  }
}

export default TodoList;
```
