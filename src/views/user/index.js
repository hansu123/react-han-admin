import React from 'react';
import UserModel from "@/models/user"
import UserForm from "./form"
import HTable from "@/components/HTable"
import SearchBar from "@/components/SearchBar.js"
import { Button, Modal, Card, Spin,Switch } from "antd"

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allColor: {
        Color: "pink",
        BgColor: "#ccc"
      },
      formOptions:["userName","phone","onlineStatus"],
      tableData: [],
      columns: [
        { title: '姓名', dataIndex: 'name', key: 'name', align: "center" },
        { title: '头像', dataIndex: 'img', key: 'img', align: "center" ,render: (record) => 
        <img src={record} style={{borderRadius:"50%"}} alt=""/>},
        { title: '性别', dataIndex: 'sex', key: 'sex', align: "center" ,render:(record)=>{
          return record?"男":"女"
        }},
        { title: '登录状态', dataIndex: 'online', key: 'online', align: "center",render: (record) => 
        <Switch checked={record} />},
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
      visible: false,
      title: "",
      type: "",
      loading: false,
     
    };
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    })
  }

  getList = (params={}) => {
    this.toggleLoading()
    UserModel.getUserList(params).then((res) => {
      console.log(res.data)
      this.setState({
        tableData: res.data.userList
      })
    this.toggleLoading()
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
  handleOperator = (type) => {

    this.setState({
      type,
      visible: true,
      title: "添加用户",
    });
  }


  //获取行数据和选中的key
  updateSelectedData=(record,index)=>{
    console.log(index)
    this.setState({
      rowData:record,
      selectedRowKeys:[index] //下标
    })
  }

  
 onSearch=(val)=>{
  this.getList(val)
 }

  render() {
   

    return (

      <div className="table_wrapper">
        <Spin spinning={this.state.loading} tip="加载中">
          <SearchBar formOptions={this.state.formOptions} onSearch={this.onSearch.bind(this)}></SearchBar>
          <Card>
            <Button onClick={() => { this.handleOperator('add') }} type="primary" style={{ marginRight: '20px' }}>添加</Button>
            <Button onClick={this.showModal} type="danger" style={{ marginRight: '20px' }}>删除</Button>
            <Button onClick={this.showModal} type="warning">修改</Button>
          </Card>
          <HTable
            bordered
            rowSelection={"radio"}
            selectedRowKeys={this.state.selectedRowKeys}
            columns={this.state.columns}
            dataSource={this.state.tableData}
            updateSelectedData={this.updateSelectedData.bind(this)}
          />

          <Modal title={this.state.title}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="submit" type="primary" onClick={this.handleOk}>
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
        </Spin>
      </div>
    );
  }

  componentDidMount() {
    this.getList()
  }
}





export default index;