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





 