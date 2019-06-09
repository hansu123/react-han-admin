import React, { Fragment } from 'react';
import BaseUI from "@/util/baseUI"
import { Card, Icon,Form, Input, Select, Button ,DatePicker} from "antd"
let{RangePicker}=DatePicker
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  contains = (val) => {
    return this.props.formOptions.includes(val)
  }

  onSearch = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSearch(values)
      }
    })


  }

  onChange=(date, dateString)=>{
    console.log(date, dateString);
  }
  
  // 表单验证
  checkPhone = (rule, value, callback) => {
    let reg = /^1(3|4|5|7|8)\d{9}$/;
    if (!value) {
      callback("请输入手机号")
    }
    else if (!reg.test(value)) { callback("请输入正确的手机号格式") }
    else {
      callback()
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Fragment>
        <Card>
          <Form layout="inline" style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div className="form_left">
              {/* 用户列表 */}
              {this.contains("userName") ? <Form.Item key="userName">
                {getFieldDecorator("userName", { rules: [{ required: true, message: '请输入用户名!' }] })(<Input placeholder="用户名" allowClear/>)}
              </Form.Item> : ""}
              {this.contains("phone") ? <Form.Item key="phone">
                {getFieldDecorator("phone", { rules: [{ validator: this.checkPhone }], })(<Input placeholder="手机号" allowClear/>)}
              </Form.Item> : ""}

              {/* 文章列表 */}
             
              {this.contains("date") ? <Form.Item key="date">
                {getFieldDecorator("date")(
                  <RangePicker
                    onChange={this.onChange}
                  />
                )}
              </Form.Item> : ""}

              {this.contains("author") ? <Form.Item key="author">
                {getFieldDecorator("author", { rules: [{ required: true, message: '请输入作者!' }] })(<Input placeholder="作者" allowClear/>)}
              </Form.Item> : ""}

              
              {this.contains("cate") ? <Form.Item key="cate">
                {getFieldDecorator("cate", { initialValue: "文章分类" })(
                  <Select onChange={this.handleCurrencyChange}  >
                    {BaseUI.getOptionList([{ value: 0, label: "JS" }, { value: 1, label: "Node.Js" },{ value: 2, label: "Vue" },{ value: 3, label: "react" }])}
                  </Select>)}
              </Form.Item> : ""}

              {/* 角色权限 */}
              {this.contains("roleID") ? <Form.Item key="roleID">
                {getFieldDecorator("roleID")(<Input placeholder="角色ID" allowClear/>)}
              </Form.Item> : ""}
              {this.contains("roleName") ? <Form.Item key="roleName">
                {getFieldDecorator("roleName")(<Input placeholder="角色名称" allowClear/>)}
              </Form.Item> : ""}
              {this.contains("onlineStatus") ? <Form.Item key="onlineStatus">
                {getFieldDecorator("onlineStatus", { initialValue: "登陆状态", })(
                  <Select onChange={this.handleCurrencyChange}  >
                    {BaseUI.getOptionList([{ value: 0, label: "下线" }, { value: 1, label: "上线" }])}
                  </Select>)}
              </Form.Item> : ""}
            </div>
            <div className="form_right">
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={this.onSearch}>
                  <Icon type="search"/>搜索
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" >
                <Icon type="reload" />刷新
              </Button>
              </Form.Item>


            </div>
          </Form>
        </Card>

      </Fragment>
    );
  }
}

SearchBar = Form.create()(SearchBar)
export default SearchBar;