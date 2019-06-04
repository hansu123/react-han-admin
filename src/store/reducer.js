import {SET_NAME,SET_ARTICLE} from "./actionType"

const defaultState={
  name:'hansu',
}

//不能修改state
export default(state=defaultState,action)=>{
  if(action.type===SET_NAME){
    let newState=JSON.parse(JSON.stringify(state))
    newState.name=action.value
    return newState
  }
  


  if(action.type===SET_ARTICLE){
    let newState=JSON.parse(JSON.stringify(state))
    newState.list=action.value
    return newState
  }
}