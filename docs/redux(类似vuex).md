# redux(类似vuex)

###1.state

state必须通过触发action才能修改

**Store** 就是把它们联系到一起的对象。Store 有以下职责：

- 维持应用的 state；
- 提供 [`getState()`](http://cn.redux.js.org/docs/api/Store.html#getState) 方法获取 state；
- 提供 [`dispatch(action)`](http://cn.redux.js.org/docs/api/Store.html#dispatch) 方法更新 state；
- 通过 [`subscribe(listener)`](http://cn.redux.js.org/docs/api/Store.html#subscribe) 注册监听器;
- 通过 [`subscribe(listener)`](http://cn.redux.js.org/docs/api/Store.html#subscribe) 返回的函数注销监听器。

一个redux应用只有一个store

store.js

```jsx
import {createStore} from "redux"
import reducer from "./reducer"

const store=createStore(reducer)
//创建数据源
export default store
```

reducer.js

```jsx
const defaultState={
  name:'hansu'
}
export default(state=defaultState,action)=>{
  return state  
}
```

reducers是一些纯函数，接口当前state和action。只需要根据action，返回对应的state。而且必须要有返回。

* state 数据
* action 方法

页面中

```jsx
import store from "@/store/store"
//引入
this.setState({
        ...store.getState()
})//解构数据

store.subscribe(() => {
      console.log(this.state)
      this.setState({
        ...store.getState()
      })
 })监听store的变化
```

可以直接调用store中的数据

###2.action

####2.1 用法

* 创建action并执行dispatch

```jsx
fn=()=>{
let action={type:"",value:""}
store.dispatch(action)
}
```

* reducer中(不能直接修改state，只能深拷贝state)

```jsx
if(action.type===""){
    newState=JSON.parse(JSON.stringify(state))
    ....
    return newState
}
```

* 页面中监听store变化并重新赋值

```jsx
store.subscribe(()=>{
    this.setState({
        ...store.getState()
    })
})
```

####2.2 拆分actionTypes(类似mutationType)

用常量来代替type中的变量，方便调试

```js
import {SET_NAME} from ""
fn=()=>{
let action={type:SET_NAME,value:""}
store.dispatch(action)
}
```

#### 2.3 actionCreators

组件中我们需要不断创建action看起来会很乱，可以创建actionCreators集中创建action

```js
import {SET_NAME} from ""
export function changeNameAction(value){
    type:SET_NAME
    value
}
```

组件中

```jsx
import {changeNameAction} from "../../store/actionCreators"
changeName=()=>{
    store.dispatch(changeNameAction('lilei'))
}
```



###进阶

以前的目录结构

```
├── redux
│   ├── store.js //总的数据仓库
│   ├── reducer.js //纯函数，只需要根据action，返回对应的state
|   ├── actionType.js //action的type转化为常数  
|   ├── actionCreators.js //集中管理action
```

随着项目越来越大，我们会发现reducer越来越长，这时我们就需要对store的结构进行调整了

```
├── redux
│   ├── modules
│   |   ├── sign //登录的数据仓库
|   |       ├── reducer.js   
|   |       ├── actionCreators     
│   |   └── 其他模块....
│   ├── reducer.js
|   ├── actionType.js   
└── store.js
```

#### store.js与之前几乎不变

```jsx
//使用redux-thunk
import {createStore,applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"
const store=createStore(
  reducer,
  applyMiddleware(thunk))
export default store
```

#### reducer拆分

* modules中的reducer.js

```js

import {SET_SIGNINFO} from "../../actionType"

import {getUserInfo} from "@/util/storage"
const defaultState={
  isSignIn:getUserInfo()
}

export default (state=defaultState,action)=>{
if(action.type===SET_SIGNINFO){
  let newState=JSON.parse(JSON.stringify(state))
  newState.isSignIn=action.value
  return newState
}
return state
}
```

* 总的reducer.js

使用combineReducers的作用就是把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。

```jsx
import {combineReducers} from "redux"
import  signReducer from ".modules/header/reducer"
export default combineReducers({
    sign:signReducer
})
```

引用数据时要注意

```jsx
取值的时候需要增加一层
state.sign.isSignIn
```

