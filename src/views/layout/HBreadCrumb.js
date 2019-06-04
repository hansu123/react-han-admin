import React from 'react';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { Breadcrumb } from "antd"
import breadCrumbName from "@/lib/breadcrumbName"
class HBreadCrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initBreadcrumb=(val)=>{
   if(val==="/home"){return}
   return  breadCrumbName[val].map((elem,i)=>{
      return <Breadcrumb.Item key={i}>{elem}</Breadcrumb.Item>
  })
  }

  render() {
    return (
      <div>
        <Breadcrumb className="content-bread">
        <Breadcrumb.Item ><Link to="/">首页</Link></Breadcrumb.Item>
        {this.initBreadcrumb(this.props.breadName)}
        </Breadcrumb>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    breadName:state.breadName
  }
}

export default connect(mapStateToProps,null)(HBreadCrumb);