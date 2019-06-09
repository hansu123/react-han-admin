import {get} from "../util/request"
class ArticleModel{
async getArticleList(){
let res=await get("article/list")
return res
}
}

export default new ArticleModel()