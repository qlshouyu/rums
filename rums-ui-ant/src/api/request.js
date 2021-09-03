import axios from "axios"
// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
const request={
  get: function(url,data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        data: data?data:{}
      }).then(function(response){
        console.log(response);
        if(200==response.status){
          if(200===response.data.code) {
            resolve(resolve.data.data)
          }else {
            reject(response)
          }
        }else {
          reject("请求错误")
        }     
      }).catch(function (error) {
        console.log(error);
        reject(error)
      });
    })
   
  },
  post: function(url,data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: data?data:{}
      }).then(function(response){
        console.log(response);
        if(200==response.status){
          if(200===response.data.code) {
            resolve(resolve.data.data)
          }else {
            reject(response)
          }
        }else {
          reject("请求错误")
        }     
      }).catch(function (error) {
        console.log(error);
        reject(error)
      });
    })
   
  },
  put: function(url,data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: url,
        data: data?data:{}
      }).then(function(response){
        console.log(response);
        if(200==response.status){
          if(200===response.data.code) {
            resolve(resolve.data.data)
          }else {
            reject(response)
          }
        }else {
          reject("请求错误")
        }     
      }).catch(function (error) {
        console.log(error);
        reject(error)
      });
    })
   
  },
  delete: function(url,data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: url,
        data: data?data:{}
      }).then(function(response){
        console.log(response);
        if(200==response.status){
          if(200===response.data.code) {
            resolve(resolve.data.data)
          }else {
            reject(response)
          }
        }else {
          reject("请求错误")
        }     
      }).catch(function (error) {
        console.log(error);
        reject(error)
      });
    })
   
  }
}
export default request
