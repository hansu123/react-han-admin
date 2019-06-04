import React from 'react';
import menuList from "@/lib/menu"
import { Form, Input, Select, Tree } from 'antd';
// import {buildMenu} from "@/util/index"
import {addRouterKey} from "@/util/index"
const { Option } = Select
const { TreeNode } = Tree
const FormItem = Form.Item;
class SettingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedKeys: [],
      formData:this.props.formData
    };
  }

  //tree
  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  onCheck = (checkedKeys) => {
    console.log(checkedKeys)
    this.setState({ checkedKeys });
  }

  getMenuList(routers){
  let  checkedKeys=routers.map((elem)=>{
    return elem.key
  })
  this.setState({
    checkedKeys
  })
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
    let {roleName,status}=this.state.formData;
    return (
      <div>
        <Form>
          <FormItem label="角色名称" {...formItemLayout}>
            {getFieldDecorator('roleName', {
              initialValue: roleName
            })(
              <Input placeholder="角色名称" disabled></Input>
            )}
          </FormItem>
          <FormItem label="状态" {...formItemLayout}>
            {getFieldDecorator('status', {
              initialValue: status
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
        < Tree
          checkable
          defaultExpandAll
          checkedKeys={this.state.checkedKeys}
          onCheck={this.onCheck}
        >
          {this.renderTreeNodes(menuList)}

        </Tree>
      </div>
    );
  }
  componentDidMount(){
    let d=addRouterKey(this.state.formData.routers)
    this.getMenuList(d)
  }
}


SettingForm = Form.create({})(SettingForm);
export default SettingForm