#react-redux

###快速开始

`npm install --save react-redux`

### Provider

> Provider可以使内部的所有组件都可以直接访问store

```jsx
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";//大写
import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
```

### connect

> 通过connect将组件与store连接起来

```jsx
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};//拿store中的数据

const mapDispatchToProps = (dispatch)=>{
    return {
        onChange(value){
            const action={
            type:..,
            value:...
            }
            dispatch(action)
        }
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
```

###理解：

store中创建数据仓库->reducer修改数据仓库中的数据->action传递方法到reducer中，根据不同的type修改不同的数据

provider

->包裹的组件都可以直接使用store中的数据

connect

-> 获取数据

* 引入connect
* 创建映射mapStateToProps
* 获取数据

```jsx
{this.props.counter} //直接调用
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};//将store中的数据映射到当前组件的props中
export default connect(
  mapStateToProps,
  null
)(Counter);
```

->修改数据

* 引入connect
* 创建映射mapDispatchToProps
* 传递action修改数据

```jsx
{this.props.onChange(..)} //直接调用
const mapDispatchToProps = (dispatch)=>{
    return {
        onChange(value){
            const action={
            type:..,
            value:...
            }
            dispatch(action)
        }
    }
};
//将dispatch映射到当前组件的props中
export default connect(mapStateToProps,null)(Counter);
```

有不同的方式来调用`connect`，这取决于你现在编写的组件类型。现对常用的方式进行总结：

|                       |                  不订阅Store                   | 订阅Store                                                 |
| :-------------------- | :--------------------------------------------: | :-------------------------------------------------------- |
| 不注入Action Creators |             `connect()(Component)`             | `connect(mapStateToProps)(Component)`                     |
| 注入Action Creators   | `connect(null, mapDispatchToProps)(Component)` | `connect(mapStateToProps, mapDispatchToProps)(Component)` |













