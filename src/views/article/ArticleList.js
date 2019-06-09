import React from 'react';
import { Button ,Pagination} from 'antd';
import articleModel from "@/models/article"
import SearchBar from "@/components/SearchBar"
import HTable from "@/components/HTable"
class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      columns: [
        { title: '日期', dataIndex: 'date', key: 'date', align: "center" },
        { title: '标题', dataIndex: 'title', key: 'title', align: "center" },
        { title: '分类', dataIndex: 'cate', key: 'cate', align: "center" },
        { title: '作者', dataIndex: 'author', key: 'author', align: "center" },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          align: "center",
          render: () => (<div><Button type="primary">编辑</Button><Button type="danger" style={{ marginLeft: '10px' }}>删除</Button></div>),
        },
      ],
      tableData: [

      ],
      formOptions:["author","date","cate"]
    };
  }

  getList = () => {

    articleModel.getArticleList().then((res) => {
      this.setState({
        tableData: res.data.data
      })
    })
  }

  updateSelectedData(record,index){
    console.log(record)
  }
  render() {
    return (
      <div className="table_wrapper">
        <SearchBar formOptions={this.state.formOptions}/>
        <HTable
          columns={this.state.columns}
          dataSource={this.state.tableData}
          updateSelectedData={this.updateSelectedData}
        />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper style={{display:"flex",justifyContent:"flex-end"}}/>
      </div>
    );
  }

  componentWillMount() {
    this.getList()
  }
}

export default ArticleList;