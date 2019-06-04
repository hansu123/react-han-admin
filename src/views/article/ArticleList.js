import React from 'react';
import { Table,Button } from 'antd';
class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      columns :[
        { title: '日期', dataIndex: 'time', key: 'time',align:"center"},
        { title: '标题', dataIndex: 'name', key: 'name',align:"center" },
        { title: '分类', dataIndex: 'age', key: 'age' ,align:"center"},
        { title: '作者', dataIndex: 'address', key: 'address',align:"center" },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          align:"center",
        render: () => (<div><Button type="primary">编辑</Button><Button type="danger" style={{marginLeft:'10px'}}>删除</Button></div>),
        },
      ],
      data : [
        {
          key: 1,
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
      
        },
        {
          key: 2,
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        
        },
        {
          key: 3,
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
       
        },
      ]
      
    


    };
  }
  render() {
    return (
      <div>

        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
       
        />

      </div>
    );
  }
}

export default ArticleList;