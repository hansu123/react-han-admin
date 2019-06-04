import {createStore} from "redux"
import reducer from "./reducer"
const store=createStore(reducer)

export default store;


//store
//reducer监听action,通过action的type来改变state的值
//action就是一个函数