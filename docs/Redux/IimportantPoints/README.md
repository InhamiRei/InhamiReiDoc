## Store 必须是唯一的

- 有一个 `/store/index.js` 文件，只在这个文件中用 `createStore()` 方法，声明了一个 `store`，之后整个应用都在使用这个 `store`

```js
// /store/index.js
import { createStore } from "redux"; //  引入createStore方法
import reducer from "./reducer";
const store = createStore(reducer); // 创建数据存储仓库
export default store; //暴露出去
```

## 只有 store 能改变自己的内容，Reducer 不能改变

- `Reudcer` 只是返回了更改的数据，但是并没有更改 `store` 中的数据，`store` 拿到了 `Reducer` 的数据，自己对自己进行了更新

```js
// /store/reducer.js
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const defaultState = {
  inputValue: "Write Something",
  list: ["早上4点起床，锻炼身体", "中午下班游泳一小时"],
};

const stateStore = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state
    newState.inputValue = action.value;
    console.log(state, action);
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
};

export default stateStore;
```

## Reducer 必须是纯函数

> 纯函数：如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数

- 可以简单的理解为返回的结果是由传入的值决定的，而不是其它的东西决定的。比如下面这段 `Reducer` 代码

```js
// /store/reducer.js
const stateStore = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state
    newState.inputValue = action.value;
    console.log(state, action);
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
};
```

- 它的返回结果，是完全由传入的参数 `state` 和 `action` 决定的，这就是一个纯函数

:::danger 注意
在 Reducer 里增加一个异步 ajax 函数，获取一些后端接口数据，然后再返回，这就是不允许的（包括你使用日期函数也是不允许的），因为违反了调用参数相同，返回相同的纯函数规则
:::
