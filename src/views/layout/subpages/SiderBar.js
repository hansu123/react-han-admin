import React from 'react';
import { connect } from "react-redux"

import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import menuList from "@/lib/menu"
import { LayoutWrapper } from "../style.js"
import {changeBreadAction} from "@/redux/modules/breadcrumb/actionCreators"

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
class SiderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      currentKey: ["/home"]
    };
  }

  //刷新时，点击状态不会发生改变
  componentWillMount() {
    let key = window.location.pathname;
    this.setState({
      currentKey: [key]
    })
    this.props.changeBread(key)
  }

  //menu的点击事件，获取key，并改变action
  changeMenuKey = (item) => {
    this.setState({
      currentKey: [item.key]
    })
    this.props.changeBread(item.key)
  }

  //设置默认展开的key
  setDefaultOpenKey = (item) => {

    var arr=item[0].split("/");

    if(arr.length>1){
      return [`/${arr[0]}`]
    }

    else{
      return []
    }
    
  }

  initMenu = (menuList) => {
    return menuList.map((menu, i) => {
      if (menu.children && menu.children.length > 0) {
        return <SubMenu
          key={menu.key}
          title={
            <span>
              <Icon type={menu.icon} />
              <span>{menu.title}</span>
            </span>
          }
        >
          {this.initMenu(menu.children)}
        </SubMenu>
      }

      else {
        return <Menu.Item key={menu.key}>
          <Link to={menu.path}>
            <Icon type={menu.icon} />
            <span>{menu.title}</span>
          </Link>
        </Menu.Item>
      }

    })
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <LayoutWrapper>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ height: "100%" }}>
          <div className="logo" />
          <Menu theme="dark"
          defaultSelectedKeys={this.state.currentKey} 
          defaultOpenKeys={this.setDefaultOpenKey(this.state.currentKey)} 
          mode="inline" 
          onClick={this.changeMenuKey} >
            {
              this.initMenu(menuList)
            }
          </Menu>
        </Sider>
      </LayoutWrapper>
    );
  }


}


const mapDispatchToProps = (dispatch) => {
  return {
    changeBread(value) {
     const action=changeBreadAction(value)
     dispatch(action)
    }
  }
}
export default connect(null, mapDispatchToProps)(SiderBar);