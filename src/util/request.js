import request from "../http"



export function get(url,params={}){
  return request({
  url,
  method:"GET",
  params
  })
}


export function post(url,data={}){
return request({
  url,
  method:"GET",
  data
})
}