## 把 Action Types 单度写入一个文件

- 写 `Redux Action` 的时候，我们写了很多 `Action` 的派发，产生了很多 `Action Types`，如果需要 `Action` 的地方我们就自己命名一个 `Type`,会出现两个基本问题
  1. 这些 `Types` 如果不统一管理，不利于大型项目的服用，设置会长生冗余代码。
  2. 因为 `Action` 里的 `Type`，一定要和 `Reducer` 里的 `type` 一一对应在，所以这部分代码或字母写错后，浏览器里并没有明确的报错，这给调试带来了极大的困难。
- 把 `Action Type` 单独拆分出一个文件。在 `src/store` 文件夹下面，新建立一个 `actionTypes.js` 文件，然后把 `Type` 集中放到文件中进行管理

## /store/actionTypes.js

```js
export const CHANGE_INPUT = "changeInput";
export const ADD_ITEM = "addItem";
export const DELETE_ITEM = "deleteItem";
```

## /src/TodoList.js

```js{1,4,9,15}
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./store/actionTypes";

clickBtn() {
  const action = { type: ADD_ITEM };
  store.dispatch(action);
}

deleteItem(index) {
  const action = { type: DELETE_ITEM, index };
  store.dispatch(action);
}

changeInputValue(e) {
  const action = {
    type: CHANGE_INPUT,
    value: e.target.value,
  };
  store.dispatch(action);
}
```

## /src/reducer.js

```js{1,9,16,23}
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
