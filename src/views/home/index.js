import React from 'react';
import "./style.scss"
import { connect } from "react-redux"
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

  componentWillMount() {
    console.log(this.props.isSignIn)
  }
}

const mapStateToProps = (state) => {
  return {
    isSignIn: state.signIn.isSignIn
  }
}
export default connect(mapStateToProps, null)(home);