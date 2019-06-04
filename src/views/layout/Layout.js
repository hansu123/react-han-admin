import React from 'react';
import LayoutUI from "./LayoutUI"
// import { changeNameAction,GetArticleList} from "../../store/actionCreators"

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

render() {
    return (
      <div>
        {
          // this.state.list instanceof Array ? <LayoutUI ></LayoutUI>: ""
          <LayoutUI children={this.props.children}></LayoutUI>
        }
      </div>
    )
  }
}

export default index;