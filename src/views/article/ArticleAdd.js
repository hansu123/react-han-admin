import React from 'react';
import {Card} from "antd"
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
class ArticleAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: ""
    };
  }


  onEditorStateChange = (editorState) => {

    this.setState({
      editorState
    })

  }

  render() {
    return (
      <div>
        <Card>
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />

</Card>

      </div>
    );
  }
}

export default ArticleAdd;