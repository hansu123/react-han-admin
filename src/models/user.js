import {get} from "@/util/request.js"

class UserModel{

async getUserList(params){

let d=await get("user/userList",params)

return d

}

}

export default new UserModel()