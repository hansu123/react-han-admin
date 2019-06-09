import React from 'react';
import { LayoutWrapper } from "./style.js"
import SiderBar from "./subpages/SiderBar"
import HeaderBar from "./subpages/HeaderBar"
import HBreadCrumb from "./subpages/HBreadCrumb"
import { Layout } from 'antd';
import {CSSTransition} from "react-transition-group"
const { Content } = Layout;

class LayoutUI extends React.Component {
 
  render() {
    return (

      <LayoutWrapper primary>
        <Layout style={{ minHeight: '100vh' }}>
          <SiderBar></SiderBar>
          <Layout>
            <Content className="content" history ={this.props.history}>
              <HeaderBar />
              <HBreadCrumb></HBreadCrumb>

              <CSSTransition 
             
              timeout={1000}>
              <div className="content-body">
              
                {this.props.children}
                
              </div>
              </CSSTransition>
            </Content>
          </Layout>
        </Layout>

      </LayoutWrapper>
    );
  }
}



export default LayoutUI;