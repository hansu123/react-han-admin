import React from 'react';
import { Table } from "antd"
class HTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  onRowClick(record, index) {
    this.props.updateSelectedData(record,index)
  }


  initTable = () => {

    //判断传入的是单选还是复选或者是否要选择框
    let rowSelection = {
      type: "",
      selectedRowKeys:this.props.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
     
    };

    let row_type = this.props.rowSelection;

    if (row_type === undefined) {
      rowSelection = null
    }
    else if (row_type === "radio") {
      rowSelection.type = "radio"
    }
    else {
      rowSelection.type = "checkbox"
    }



    return <Table {...this.props} rowSelection={rowSelection} 
    onRow={(record, index) => {
      return {
        onClick: event => {
       
          this.onRowClick(record, index)
        }, // 点击行

      };
    }}></Table>
  }
  render() {
    return (
      <div>
        {this.initTable()}

      </div>
    );
  }
}

export default HTable;