import React from 'react';
import { Layout, Avatar, Menu, Dropdown, Icon} from 'antd';
import { LayoutWrapper } from "./style.js"
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
  signOut = () => {
    this.setState({
      visible:true
    })
   
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1" onClick={this.changePwd}><Icon type="unlock" />切换账号</Menu.Item>
        <Menu.Item key="2" onClick={this.signOut}><Icon type="poweroff" />退出登陆</Menu.Item>
      </Menu>
    );
    return (
      <LayoutWrapper>
        <Header className="header" >
          <div style={{ display: 'flex', alignItems: "center" }}>
            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
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

export default HeaderBar;

