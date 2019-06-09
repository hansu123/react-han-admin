// import {createStore} from "redux"
// import reducer from "./reducer"
// const store=createStore(reducer)

// export default store;

//使用redux-thunk
import {createStore,applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"
const store=createStore(
  reducer,
  applyMiddleware(thunk))

export default store
