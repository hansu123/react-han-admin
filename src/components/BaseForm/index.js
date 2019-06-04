import React from 'react';
import BaseUI from "@/util/baseUI"
import { Card, Form, Input, Select, Button } from "antd"
class BaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formList: this.props.formList,

    };
  }



  initFormList = () => {
    const { getFieldDecorator } = this.props.form
    let finalFormList = [];
    this.state.formList.forEach((item, i) => {
      if (item.type === "INPUT") {
        let field=item.field;
        const INPUT =
          <Form.Item key={i} >
            {getFieldDecorator(field)(
              <Input placeholder={item.placeholder} />
            )}

          </Form.Item>
        finalFormList.push(INPUT)
      }
      else if (item.type === "SELECT") {
        let field=item.field;
        const SELECT =
          <Form.Item key={i} >
            {getFieldDecorator(field,{
              initialValue:item.initLabel,
            })(
              <Select
                // value={item.initLabel}
                style={{ width: '120' }}
                onChange={this.handleCurrencyChange}
              >
                {BaseUI.getOptionList(item.Options)}
              </Select>
            )}

          </Form.Item>
        finalFormList.push(SELECT)
      }

      else if (item.type === "CHECKBOX") {

      }

      else {

      }
    })

    console.log(finalFormList)
    return finalFormList;
  }
  render() {

    return (
      <div>

        <Card>
          <Form layout="inline" onSubmit={this.handleSubmit} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="form_left">
              {this.initFormList()}
            </div>

            <div className="form_right">
              <Form.Item>
                <Button type="primary" htmlType="submit" >
                  搜索
          </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" >
                  重置
          </Button>
              </Form.Item>
            </div>

          </Form>
        </Card>

      </div>
    );
  }
}

BaseForm = Form.create()(BaseForm)
export default BaseForm;