import React from 'react';
import {Select} from "antd"
const Option=Select.Option
class BaseUI{


//封装下拉框
getOptionList(data){
if(data && data.length>0){
console.log(data)
let options=[];
data.forEach((item,i)=>{
options.push( <Option value={item.value} key={i}>{item.label}</Option>)
})
return options
}
else{
  return []
}
}
}



export default new BaseUI()