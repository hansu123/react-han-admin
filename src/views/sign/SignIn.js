import React from 'react';
import { Input, Icon, Form, Button, Checkbox, message } from 'antd';
import signCss from "./sign.module.css"
import { setUserInfo, setSignInfo, getSignInfo, removeSignInfo } from "@/util/storage"

import { connect } from "react-redux"
import signModel from "@/models/sign"

//引入action
import { changeSignInfoAction } from "@/redux/modules/sign/actionCreators.js"
const FormItem = Form.Item
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { remember, ...signInfo } = values;
        if (remember) {
          setSignInfo(signInfo)
        }
        else {
          removeSignInfo()
        }
        message.loading('登录中').then(() => {
          signModel.signIn().then((res) => {
            console.log(res)
            setUserInfo(values)
            this.props.changeSignIn(values)
            message.info('登录成功')
            this.props.history.push('/')
          })
        })
      }
    });
  };



  gitHub = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
  };

  render() {
    const { getFieldDecorator } = this.props.form
    let signInfo = getSignInfo();
    return (

      <div id={signCss.bg}>
        <div id={signCss.login_wrap}>
          <div id={signCss.login}>

            <div className={signCss.login_content}>
              <div className={signCss.login_title}>
                <span>React-Han-Admin</span>
              </div>
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                    initialValue: signInfo !== null ? signInfo.userName : ""
                  })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                    initialValue: signInfo !== null ? signInfo.password : ""
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox style={{ color: "#fff" }}>记住我</Checkbox>
                  )}
                  <span className="login-form-forgot" style={{ float: "right", color: "#fff" }}>忘记密码</span>
                  <Button type="info" htmlType="submit" style={{ width: "100%" }}>
                    登录
                  </Button>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: "#fff" }}>没有账号立即注册</span>
                    <span onClick={this.gitHub} style={{ color: "#fff" }}><Icon type="github" style={{ marginRight: "10px" }} />第三方登录</span>
                  </p>
                </FormItem>
              </Form>
            </div>
          </div>
          <div id={signCss.login_img}>
            <span className={signCss.circle}>
              <span></span>
              <span></span>
            </span>
            <p id={signCss.title}>CLOUD</p>
          </div>
        </div>
      </div>

    );
  }
}
login = Form.create({})(login)


const mapDispatchToProps = (dispatch) => {
  return {
    changeSignIn(value) {
      const action = changeSignInfoAction(value)
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(login);