import {get} from "@/util/request"
class SignModel{

async signIn(){
let d=await get("signIn")
return d
}

}


export default new SignModel()