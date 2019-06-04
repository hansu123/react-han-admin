import {get} from "@/util/request"
class RoleModel{
async getRoleList(){
let d=await get("role/roleList")
return d
}
}

export default new RoleModel()