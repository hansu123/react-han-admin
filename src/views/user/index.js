import React from 'react';
import UserModel from "@/models/user"
import UserForm from "./form"
import HTable from "@/components/HTable"
import FormBar from "@/components/BaseForm/index.js"
import { UserWrapper } from "./style.js"
import { Button,Modal,Card } from "antd"
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allColor: {
        Color: "pink",
        BgColor: "#ccc"
      },
      formList: [
        {
          type: "INPUT",
          placeholder: "用户名",
          field:"userName"
        },
        {
          type: "INPUT",
          placeholder: "手机号",
          field:"phone"
        },
        {
          type: "SELECT",
          initLabel: "登录状态",
          initValue: undefined,
          Options: [{ value: 0, label: "下线" }, { value: 1, label: "上线" }],
          field:"status"
        },

      ],
      tableData: [],
      columns: [
        { title: '姓名', dataIndex: 'name', key: 'name', align: "center" },
        { title: '性别', dataIndex: 'sex', key: 'sex', align: "center" },
        { title: '登录状态', dataIndex: 'online', key: 'online', align: "center" },
        { title: '手机号', dataIndex: 'phone', key: 'phone', align: "center" },
        { title: '地址', dataIndex: 'address', key: 'address', align: "center" },
        {
          title: '操作',
          dataIndex: '',
          key: 'x',
          align: "center",
          render: () => <Button>删除</Button>,
        },
      ],
      selectedRowKeys: [],

      visible:false,
      title:"",
      type:"",

    };
  }

  getList = () => {

    UserModel.getUserList().then((res) => {
      this.setState({
        tableData: res.data.userList
      })
    })

  }

  onSelectChange = selectedRowKeys => {

    alert(selectedRowKeys);

    this.setState({ selectedRowKeys });
  };

 

  handleOk = e => {
   
    this.setState({
      visible: false,
    });

    console.log(this.userForm.props.form.getFieldsValue())
    this.userForm.props.form.resetFields()
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  //功能区
  handleOperator=(type)=>{

    this.setState({
      type,
      visible: true,
      title:"添加用户",
    });



  }


  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
    };
  
    return (
      <UserWrapper primary allColor={this.state.allColor}>
        <FormBar formList={this.state.formList}></FormBar>
        <Card>
        <Button onClick={()=>{this.handleOperator('add')}} type="primary" style={{marginRight:'20px'}}>添加</Button>
        <Button onClick={this.showModal} type="danger" style={{marginRight:'20px'}}>删除</Button>
        <Button onClick={this.showModal} type="warning">修改</Button>
        </Card>
        <HTable
          onRow={record => {
            return {
              onClick: event => {
                alert(1)
              }, // 点击行
            };
          }}
          rowSelection={rowSelection}
          columns={this.state.columns}
          dataSource={this.state.tableData}
        />
       
        <Modal  title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary"  onClick={this.handleOk}>
            保存
          </Button>,
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>
           ,
          ]}
          >
          <UserForm wrappedComponentRef={(form) => this.userForm = form}>

          </UserForm>
        </Modal>

      </UserWrapper>
    );
  }

  componentDidMount() {
    this.getList()
  }
}

export default index;