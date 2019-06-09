import { SET_MENU } from "@/redux/actionType"
const defaultState = {
  breadName: "/home"
}
export default (state = defaultState, action) => {
  if (action.type === SET_MENU) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.breadName = action.value
    return newState
  }
  return state
}