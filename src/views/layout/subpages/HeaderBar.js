import React from 'react';
import { Layout, Avatar, Menu, Dropdown, Icon, Badge } from 'antd';
import { LayoutWrapper } from "../style.js"
import { removeUserInfo } from "@/util/storage"
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux"

const { Header } = Layout;

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  changePwd = () => {
    alert("切换账号")
  }
  changeAvatar=()=>{
    
  }
  signOut = () => {
    removeUserInfo()
    this.props.changeSignIn("")
    this.props.history.push('/signIn')
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={this.changeAvatar}><Icon type="user" />更换头像</Menu.Item>
        <Menu.Item key="1" onClick={this.changePwd}><Icon type="unlock" />切换账号</Menu.Item>
        <Menu.Item key="2" onClick={this.signOut}><Icon type="poweroff" />退出登陆</Menu.Item>
      </Menu>
    );
    return (
      <LayoutWrapper>
        <Header className="header" >

          <div style={{ display: 'flex', alignItems: "center" }}>
            <Badge dot>
              <Icon type="notification" />
            </Badge>
            <Avatar style={{ backgroundColor: '#87d068', marginLeft: "10px" }} icon="user" />
            <Dropdown overlay={menu} trigger={['click']}>
              <div style={{ color: "#fff", cursor: 'pointer', marginLeft: '10px' }}>
                管理员 <Icon type="down" />
              </div>
            </Dropdown>
          </div>
        </Header>
      </LayoutWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeSignIn(value) {
      const action = {
        type: "set_sign",
        value
      }
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(withRouter(HeaderBar));

