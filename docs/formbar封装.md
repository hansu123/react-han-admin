### formbar封装

父组件

```jsx
<FormBar formList={this.state.formList}></FormBar>
```

formBar组件

formList的数据格式

```jsx
 formList: [
{
type:"INPUT",
label:"用户名",
placeholder:"用户名"
},
{
type:"INPUT",
label:"手机号",
placeholder:"手机号"
},
{
type: "SELECT",
label:"登录状态",
initLabel:"登录状态",
initValue:undefined,
Options: [{ value: 0, label: "下线" }, { value: 1, label: "上线" }]
},      
],
```

核心代码

```jsx
initFormList = () => {
    let finalFormList = [];
    this.state.formList.forEach((item, i) => {
      if (item.type === "INPUT") {
        const INPUT =
          <Form.Item key={i}>
            <Input placeholder={item.placeholder} />
          </Form.Item>
        finalFormList.push(INPUT)
  }
      else if (item.type === "SELECT") {
        const SELECT =
          <Form.Item  key={i}>
            <Select
              value={item.initLabel}
              style={{ width: '120' }}
              onChange={this.handleCurrencyChange}
            >
              {BaseUI.getOptionList(item.Options)}
            </Select>
          </Form.Item>
        finalFormList.push(SELECT)
      }
      else if (item.type === "CHECKBOX") {
      }
      else {
      }
 })
    return finalFormList;
  }
  render() {
    return (
      <div>
        <Card>
<Form layout="inline" onSubmit={this.handleSubmit}         style={{ display: 'flex', justifyContent: 'space-between' }}>
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
```

### 封装表格

因为每次表格的配置项都有相同的地方，所以打算将表格封装

#### 1.传入参数的封装

*  bordered
*  columns={columns}  
* dataSource={this.state.data}

一般就是这几个参数

在封装的组件中通过`...this.props`结构即可

2.rowSelection的封装

带有选择框需要传入rowSelection参数

* type:类型，复选框还是单选框
* selectedRowKeys：指定选中项的 key 数组，需要和 onChange 进行配合
* onChange：选中项发生变化时的回调
* ...

这些参数都差不多，主要是type的差异，所以我们选择在封装的组件中配置rowSelection，而用到组件时只需传入type值就可以动态调用单选框还是复选框。

ex:

index.js:

```jsx
<HTable 
bordered 
columns={columns}
dataSource={this.state.data}
selectedRowKeys={this.state.selectedRowKeys}
rowSelection={"radio"}/>,
```

HTable:

```jsx
let rowSelection = {
      type: "",
      selectedRowKeys:this.props.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`,   'selectedRows: ', selectedRows);
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
```

#### 2.点击事件的封装

当点击某行时，我们需要拿到对应的数据

我们需要用到onRow的配置项。

```jsx
<Table {...this.props} rowSelection={rowSelection} 
    onRow={(record, index) => {
      return {
        onClick: event => {
          this.onRowClick(record, index)
        }, // 点击行
      };
}}></Table>
```

onRowClick:

```jsx
 onRowClick(record, index) {
    this.props.updateSelectedData(record,index)
 }
```

这里注意一定要在rowSelection中配置selectedRowKeys，点击时将index赋值给它，否则点击行，前面的单选或者复选框将不会被选中。

#### 3.子父传值

在父组件定义函数，在组件中调用该函数，改变父组件中的值

```jsx
updateSelectedData(record,index){
  this.setState({
    rowData:record,
    selectedRowKeys:[index] //下标
  })
}
```

