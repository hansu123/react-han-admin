import {combineReducers} from "redux"
import breadcrumbReducer from "./modules/breadcrumb/reducer"
import signInReducer from "./modules/sign/reducer"

export default combineReducers({
  breadcrumb:breadcrumbReducer,
  signIn:signInReducer
})