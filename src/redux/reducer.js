import { SET_MENU } from "./actionType"
const initState = {
  breadName: "/home"
}
export default (state = initState, action) => {
  console.log(action)
  if (action.type === SET_MENU) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.breadName = action.value
    return newState
  }
  return state
}