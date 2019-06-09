#redux中间件

dispatch->reducer之间进行一些升级。进行一些特殊的处理就需要中间件。

![](https://hansu-1253325863.cos.ap-shanghai.myqcloud.com/newblog/markdown/react/%E4%B8%AD%E9%97%B4%E4%BB%B6.jpg)

### 1.redux-thunk



在stroe.js中引入

```
import {createStore,applyMiddleware} from "redux"
```

才能使用中间件

通常我们会把异步操作放在action中，我们一般在vue中也是这么做的。但是在react中action**只能返回一个对象，不能返回一个函数**，于是我们需要redux-thunk这个中间件。

没有使用redux-thunk之前

```js
export function initArticleAction(value){
  return {
  type: SET_ARTICLE,
  value
  }
}
```

只能return一个对象

使用redux-thunk之后

* actionCreators中定义一个action

```jsx
export function GetArticleList(){
  return (dispatch)=>{
    ArticleModel.getArticleList().then((res) => {
        const action = {
             type: SET_ARTICLE,
             value: res.data
        }
      dispatch(action)
    })
  }
}
```

* 组件中调用

```jsx
getArticleList = () => {
    const action=GetArticleList()
    store.dispatch(action)
}
```

是不是很熟悉，说实话，感觉vue真的好用。



异步请求改store中的方法

- 定义 actionCreators的方法
- 在组件中调用 actionCreators的方法，并传递请求后的数据
- reducer中根据type存储对应的数据

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







 