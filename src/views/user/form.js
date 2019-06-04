import React from 'react';
import { Form, Input, Radio } from "antd";
const TextArea=Input.TextArea
const RadioGroup = Radio.Group
const FormItem = Form.Item;
class form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { getFieldDecorator } = this.props.form;//双向数据绑定

    //label和form样式
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      },
    };
    
    return (
      
      <div>

        <Form >
          <FormItem label="姓名" {...formItemLayout}>
            {getFieldDecorator('userName')(
              <Input></Input>
            )}
          </FormItem>

          <FormItem label="性别" {...formItemLayout}>
            {getFieldDecorator('sex')(
              <RadioGroup>
                <Radio value={0}>男</Radio>
                <Radio value={1}>女</Radio>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem label="手机号" {...formItemLayout}>
            {getFieldDecorator('phone')(
              <Input></Input>
            )}
          </FormItem>

          <FormItem label="地址" {...formItemLayout}>
            {getFieldDecorator('address')(
              <TextArea rows={3}></TextArea>
            )}
          </FormItem>

        </Form>



      </div>
    );
  }
}

form = Form.create({})(form);

export default form