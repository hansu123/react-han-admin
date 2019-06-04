import React from 'react';
import { Input} from 'antd';
import signCss from "./sign.module.css"
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {

    return (
    
        <div id={signCss.bg}>
          <div id={signCss.login_wrap}>
            <div id={signCss.login}>
              
            
                  <Input placeholder="请输入用户名"></Input>
              
             
            </div>
            <div id={signCss.login_img}>
              <span className={signCss.circle}>
                <span></span>
                <span></span>
              </span>
              <span className={signCss.star}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
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

export default login;