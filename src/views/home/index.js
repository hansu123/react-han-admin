import React from 'react';
import "./style.scss"
class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home_wrapper">
        <img src='https://hansu-1253325863.cos.ap-shanghai.myqcloud.com/newblog/web/core-img/admin.jpg' alt="home" />
     
      </div>
    );
  }
}


export default home;