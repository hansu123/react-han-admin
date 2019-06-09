import React from 'react';
import { Form, Input, Select } from 'antd';
const { Option } = Select
const FormItem = Form.Item;
class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      },
    };
    const { getFieldDecorator } = this.props.form
  
    return (
      <div>
         <Form >
              <FormItem label="角色名称" {...formItemLayout}>
                {getFieldDecorator('roleName')(
                  <Input placeholder="角色名称"></Input>
                )}
              </FormItem>
              <FormItem label="状态" {...formItemLayout}>
                {getFieldDecorator('status', {
                  initialValue: "在线状态"
                })(
                  <Select>
                    <Option value="0">
                      上线
              </Option>
                    <Option value="1">
                      下线
              </Option>
                  </Select>
                )}

              </FormItem>
            </Form>
      </div>
    );
  }
}

AddForm = Form.create({})(AddForm);
export default AddForm