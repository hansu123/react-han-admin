问题汇总

####1.函数路由跳转

在路由下的子组件可以通过

`this.props.histroy.push`

但如果是子组件的子组件，就会出现

`出现undefined push`的错误

打印this.props发现为空。

解决：

```jsx
import withRouter from "react-router-dom"
export default withRouter(class名)
```

#### 2.localStorage存储

存储对象的时候，需要反序列化

`JSON.stringify(data)`



####3.刷新保持选中功能

window.location.hash



