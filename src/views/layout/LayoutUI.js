import React from 'react';
import { LayoutWrapper } from "./style.js"
import SiderBar from "./SiderBar"
import HeaderBar from "./HeaderBar"
import HBreadCrumb from "./HBreadCrumb"
import { Layout } from 'antd';

const { Content } = Layout;

class LayoutUI extends React.Component {
 
  render() {
    return (

      <LayoutWrapper primary>
        <Layout style={{ minHeight: '100vh' }}>
          <SiderBar></SiderBar>
          <Layout>
            <Content className="content">
              <HeaderBar />
              <HBreadCrumb></HBreadCrumb>
              <div className="content-body">
                {this.props.children}
              </div>
            </Content>
          </Layout>
        </Layout>

      </LayoutWrapper>
    );
  }
}



export default LayoutUI;