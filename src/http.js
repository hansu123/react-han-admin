import axios from "axios"

const http = axios.create({
  // baseURL: "http://localhost:4000/",
  // baseURL: process.env.BASE_API,
  baseURL:" https://www.easy-mock.com/mock/5cd7c9b5d0d16128bd72b14d/api/",
  timeout: 1000,
  withCredentials: true
});

// service.defaults.withCredentials = true

//请求拦截
http.interceptors.request.use(config => {
  
if (config.method === 'post' || config.method === "put" || config.method === "delete") {
    //config.data = JSON.stringify(config.data);
}

return config;

}, error => {
  console.error(error)
  Promise.reject(error)
})

//响应拦截
http.interceptors.response.use(
  response => {
   
    return response;
  },
  error => {
    
    return Promise.reject(error)
  })

export default http