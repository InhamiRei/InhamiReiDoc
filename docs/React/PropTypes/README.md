## 简单应用

- 大型项目，如果你不校验，后期会变的异常混乱，业务逻辑也没办法保证

```js
import PropTypes from "prop-types";
```

```js
FoodItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};
```

## 必传值的校验

- 不传 requireContent 就会报错

```js
FoodItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  requireContent: PropTypes.string.isRequired,
};
```

## 使用默认值 defaultProps

```js
FoodItem.defaultProps = {
  defaultContent: "我是必填的内容",
};
```

## 完整子组件代码

```js{2,20-22,24-29}
import React, { Component } from "react";
import PropTypes from "prop-types";

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

FoodItem.defaultProps = {
  avname: "123",
};

FoodItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  requireContent: PropTypes.string.isRequired,
};

export default FoodItem;
```
