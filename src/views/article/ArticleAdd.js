import React from 'react';
import { Card, Input, Upload, Modal, Icon, Form, Select, Button } from "antd"
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import BaseUI from "@/util/baseUI"
const FormItem = Form.Item
class ArticleAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: "",

      previewVisible: false,
      previewImage: '',
      fileList: [
      ],
      Options: [{ value: 0, label: "JS" }, { value: 1, label: "Node.Js" }, { value: 2, label: "Vue" }, { value: 3, label: "react" }]

    };
  }


  //上传
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });



  onEditorStateChange = (editorState) => {

    this.setState({
      editorState
    })

  }

  render() {
    const formItemLayout = {
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 22
      },
    };
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { getFieldDecorator } = this.props.form
    return (
      <div className="table_wrapper">

        <Form>
          <FormItem  {...formItemLayout} label="标题">

            {getFieldDecorator('title')(<Input placeholder="输入标题" />)}

          </FormItem>

          <FormItem  {...formItemLayout} label="作者">

            {getFieldDecorator('author')(<Input style={{ width: "200px" }} placeholder="输入作者" />)}

          </FormItem>

          <FormItem  {...formItemLayout} label="分类">

            {getFieldDecorator('cate', { initialValue: "" })(<Select style={{ width: "200px" }}>
              {BaseUI.getOptionList(this.state.Options)}
            </Select>)}

          </FormItem>

          <FormItem  {...formItemLayout} label="文章内容">
            <Editor
              editorState={this.state.editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </FormItem>

          <FormItem {...formItemLayout} label="封面图">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </FormItem>





        </Form>

        <div style={{ textAlign: "center",marginTop:"60px"}}>
          <Button type="primary" size="large">发布文章</Button>
        </div>



      </div>
    );
  }
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

ArticleAdd = Form.create({})(ArticleAdd)
export default ArticleAdd;