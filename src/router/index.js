import React from 'react';
import App from "../App"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '@/views/layout/Layout'
import SignIn from '@/views/sign/SignIn'
import SignUp from '@/views/sign/SignUp'


//组件
import Home from "@/views/home/"
import UIButton from "@/views/UI/buttons"
import UITabs from "@/views/UI/tabs"
import ArticleList from "@/views/article/ArticleList"
import ArticleAdd from "@/views/article/ArticleAdd"
import User from "@/views/user/"
import ChartBar from "@/views/chart/bar"
import ChartPie from "@/views/chart/pie"
import Manage from "@/views/role/manage/"
import Organize from "@/views/role/organize/"
import NotFound from "@/views/notFound/"
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    return (
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
    );
  }
}

export default index;