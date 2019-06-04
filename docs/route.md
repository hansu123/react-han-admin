#路由

###一. 用法

####1.安装

`cnpm i react-router-dom -S`

####2.引入

```jsx
import { BrowserRouter as Router, Route, Link }
from "react-router-dom"
```

#### 3.使用

```jsx
<Router>
<div>
      <Route exact path="/" component={Home}></Route>
      <Route  path="/article" component={Article}></Route>
</div>
</Router>
```

#### 4.点击跳转相应页面

```js
<Router>
<div>
      <Link to="/">首页</Link>
      <Link to="/article">文章</Link>
      <Route exact path="/" component={Home}></Route>
      <Route path="/article" component={Article}></Route>
</div>
</Router>
```

exact表示严格匹配，不然会匹配多个路由

`<Link/>`可以单独使用如同a标签

####5.重定向

```jsx
<Redirect to="/somewhere/else" />
```

```jsx
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```

#### 6. 两种方式实现嵌套路由

#####6.1 分布式路由

app.js

```jsx
<Router>
      <div className="App">
        <Switch>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route parth="/" component={Layout}> 
         </Route>
        </Switch>
      </div>
</Router>
```

layout.js

```jsx
<div className="content-body">
<Switch>
                  <Route path="/" exact={true} component={Home}></Route>
                  <Route path="/ui/button" component={UIButton}></Route>
                  <Route path="/ui/tab" component={UITabs}></Route>
                  <Route path="/articleList" component={ArticleList}></Route>
                  <Route path="/articleAdd" component={ArticleAdd}></Route>
                  <Route path="/user" component={User}></Route>
                  <Route path="/chart/bar" component={ChartBar}></Route>
                  <Route path="/chart/pie" component={ChartPie}></Route>
                  <Route path="/role/manage" component={Manage}></Route>
                  <Route path="/role/organize" component={Organize}></Route>
</Switch> 
</div>
```

#####6.2 集中式

将router文件放在一个文件中，统一管理

router.js

```jsx
<Router>
      <App>
        <Switch>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route parth="/" render={() =>
            <Layout>
              <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/ui/button" component={UIButton}></Route>
                <Route path="/ui/tab" component={UITabs}></Route>
                <Route path="/article/articleList" component={ArticleList}></Route>
                <Route path="/article/articleAdd" component={ArticleAdd}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/chart/bar" component={ChartBar}></Route>
                <Route path="/chart/pie" component={ChartPie}></Route>
                <Route path="/role/manage" component={Manage}></Route>
                <Route path="/role/organize" component={Organize}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Layout>
          } />
         
        </Switch>
      </App>
</Router>
```

因为包裹在`App`组件中，所以`App`的组件中需要添加

`{this.props.children}`

类似 `router-view`

然后在首页的主要内容content中也要相应的添加`{this.props.children}`

注意：超过一层的，需要将children作为参数进行传递，否则无效

App->layout->layoutUI(需要接受传递的children,否则无效)

###二. 路由传值

```jsx
<Route path="/article/:aid" component={Article}></Route>
```

```jsx
<Link to={`/article/aid=${this.state.id}`}>文章1</Link>
```

获取aid(安装url模块)

```jsx
import url from "url“
let aid=url.parse(this.props.location.search,true).aid
console.log(aid)
```

###三. 动态路由

```jsx
<Route path="/article/:aid" component={Article}></Route>
```

```jsx
<Link to={`/article/${this.state.id}`}>文章1</Link>
```

[官方文档](<https://reacttraining.com/react-router/web/guides/quick-start>)



