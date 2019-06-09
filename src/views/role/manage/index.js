import React from 'react';
import { Card, Button, Modal, message } from 'antd'
import AddForm from './form/AddForm'
import SettingForm from './form/SettingForm'
import HTable from "@/components/HTable"
import SearchBar from "@/components/SearchBar"
import RoleModel from "@/models/role"

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
     formOptions:["roleID","roleName","onlineStatus"],
      visible: false,
      modalTitle: "",
      type: "add",
      rowData: undefined,
      selectedRowKeys: []
    };
  }
  //获取数据
  getList = () => {
    RoleModel.getRoleList().then((res) => {
      this.setState({
        data: res.data.roleList
      })
      this.addKey(this.state.data)
    })
  }
 //给数据添加key值
  addKey = (data) => {
    data.forEach((elem, i) => {
      if (!elem.key) {
        elem.key = i
      }
    })
    return data
  }

  checkType(type) {
    let rules = {
      add: (type) => {
        this.setState({
          visible: true,
          modalTitle: "添加角色",
          type
        })
      },
      edit: (type) => {
        if (!this.state.rowData) {
          message.error('请先选择一条数据');
          return
        }
        this.setState({
          visible: true,
          modalTitle: "修改角色",
          type
        })

      },
      delete: (type) => {
        this.setState({
          visible: true,
          modalTitle: "删除角色",
          type
        })
      }
    }
    return rules[type](type)
  }

  showModal = (type) => {
    this.checkType(type)
  }



  handleOk = e => {
    this.setState({
      visible: false,
    });
   
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  updateSelectedData(record, index) {
    this.setState({
      rowData: record,
      selectedRowKeys: [index] //下标
    })
  }

  render() {
    let columns = [
      {
        title: '角色ID',
        dataIndex: 'roleID',
        key: 'id',
        align: 'center'
      },
      {
        title: '角色名称',
        dataIndex: 'roleName',
        key: 'name',
        align: 'center'
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        align: 'center'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center'
      },
      {
        title: '授权人',
        dataIndex: 'authorizer',
        key: 'authorizer',
        align: 'center'
      },
    ];

    return (
      <div className="table_wrapper">
      
          <SearchBar formOptions={this.state.formOptions}>
          </SearchBar>
       
        <Card>
          <Button type="primary" style={{ marginRight: 20 }} onClick={() => { this.showModal("add") }}>添加角色</Button>
          <Button type="primary" style={{ marginRight: 20 }} onClick={() => { this.showModal("edit") }}>权限设置</Button>
          <Button type="primary" onClick={() => { this.showModal("delete") }}>用户授权</Button>
        </Card>
       
          <HTable
            bordered
            columns={columns}
            dataSource={this.state.data}
            rowSelection={"radio"}
            selectedRowKeys={this.state.selectedRowKeys}
            updateSelectedData={this.updateSelectedData.bind(this)} />,
       


        <Modal
          title={this.state.modalTitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        {(() => {
          switch (this.state.type) {
            case 'add':
              return <AddForm ></AddForm>;
            case 'edit':
              return <SettingForm formData={this.state.rowData}></SettingForm>;
            default:console.log("error");
          }
        })()}
        </Modal>
        </div>
    );
  }

  componentWillMount() {
    this.getList()
  }
}

export default index;