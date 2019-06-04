# redux(类似vuex)

###1.state

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

reducer就是一个函数，有两个参数

* state 数据
* action 方法

页面中

```jsx
import store from "../../store/store"
//引入
this.setState({
        ...store.getState()
})//解构数据

//store.subscribe(() => {
      //console.log(this.state)
      //this.setState({
        //...store.getState()
      //})
 //})监听store的变化
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

2.4 异步请求改store中的方法

* 定义 actionCreators的方法
* 在组件中调用 actionCreators的方法，并传递请求后的数据
* reducer中根据type存储对应的数据

actionCreators:

```jsx
export function initArticleAction(value){
  return {
  type: SET_ARTICLE,
  value
}
```

组件中

```jsx
getArticleList = () => {
    ArticleModel.getArticleList().then((res) => {
      const action = initArticleAction(res.data)
      store.dispatch(action)
    })
}
```

reducer

```jsx
if(action.type===SET_ARTICLE){
    let newState=JSON.parse(JSON.stringify(state))
    state.list=action.value
    return newState
}
```
