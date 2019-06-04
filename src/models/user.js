import {get} from "@/util/request.js"

class UserModel{

async getUserList(){

let d=await get("user/userList")

return d

}

}

export default new UserModel()