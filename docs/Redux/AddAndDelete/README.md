## 添加增加 list 方法

```js
// /src/TodoList.js
<Button type="primary" onClick={this.clickBtn}>
  增加
</Button>
```

```js{6,11-14}
// /src/TodoList.js
constructor(prors) {
  super(prors);
  this.state = store.getState();
  this.changeInputValue = this.changeInputValue.bind(this);
  this.clickBtn = this.clickBtn.bind(this);
  this.storeChange = this.storeChange.bind(this);
  store.subscribe(this.storeChange); //订阅Redux的状态
}

clickBtn() {
  const action = { type: "addItem" };
  store.dispatch(action);
}
```

```js
// /store/reducer.js
if (action.type === "addItem") {
  let newState = JSON.parse(JSON.stringify(state));
  newState.list.push(newState.inputValue);
  newState.inputValue = "";
  return newState;
}
```

- 这个时候点击增加按钮后输入框还是不会清空
- 是因为我们只是清空了 `state` 里的输入框，需要在外面将 `value` 变成可控的

```js{3,6}
// /src/TodoList.js
render() {
  const { inputValue } = this.state;
  return (
    <div style={{ margin: "10px" }}>
      <Input placeholder="Write something" style={{ width: "250px", marginRight: "10px" }} onChange={this.changeInputValue} value={inputValue} />
      <Button type="primary" onClick={this.clickBtn}>
        增加
      </Button>
      <div style={{ marginTop: "10px", width: "300px" }}>
        <List bordered dataSource={this.state.list} renderItem={item => <List.Item>{item}</List.Item>} />
      </div>
    </div>
  );
}
```

## 添加删除 list 方法

```js
// /src/TodoList.js
<List bordered dataSource={this.state.list} renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>} />
```

```js
deleteItem(index) {
  const action = { type: "deleteItem", index };
  store.dispatch(action);
}
```

```js
// /store/reducer.js
if (action.type === "deleteItem") {
  let newState = JSON.parse(JSON.stringify(state));
  newState.list.splice(action.index, 1);
  return newState;
}
```

## 完整代码

```js{12,17-20,22-25,40,43,48}
// /src/TodoList.js
import React, { Component } from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store/index";

class TodoList extends Component {
  constructor(prors) {
    super(prors);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange); //订阅Redux的状态
  }

  clickBtn() {
    const action = { type: "addItem" };
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = { type: "deleteItem", index };
    store.dispatch(action);
  }

  changeInputValue(e) {
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div style={{ margin: "10px" }}>
        <Input placeholder="Write something" style={{ width: "250px", marginRight: "10px" }} onChange={this.changeInputValue} value={inputValue} />
        <Button type="primary" onClick={this.clickBtn}>
          增加
        </Button>
        <div style={{ marginTop: "10px", width: "300px" }}>
          <List bordered dataSource={this.state.list} renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>} />
        </div>
      </div>
    );
  }
}

export default TodoList;
```
