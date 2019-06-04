import {SET_NAME,SET_ARTICLE} from "./actionType"
//API
import ArticleModel from "../models/article"

export function changeNameAction(value){
  return {
  type: SET_NAME,
  value
  }
}


export function initArticleAction(value){
  return {
  type: SET_ARTICLE,
  value
  }
}

export function GetArticleList(){

  return (dispatch)=>{

    ArticleModel.getArticleList().then((res) => {
      const action = initArticleAction(res.data)
      dispatch(action)
    })


  }
}