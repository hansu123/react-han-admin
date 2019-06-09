// import {fromJS} from "immutable"
import {SET_SIGNINFO} from "../../actionType"

import {getUserInfo} from "@/util/storage"
const defaultState={
  isSignIn:getUserInfo()
}

export default (state=defaultState,action)=>{
if(action.type===SET_SIGNINFO){
  let newState=JSON.parse(JSON.stringify(state))
  newState.isSignIn=action.value
  return newState
  // return state.set('isSignIn',action.value)
}
return state
}