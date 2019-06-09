import React from 'react';
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
         
          </div>
        </div>
    
    );
  }
}

export default login;