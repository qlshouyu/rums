import axios from "axios"
import config from "../config"
import { getToken } from './auth'
import store from '../store/store'
import { loading,unloading} from '../slices/requestSlices'
// 创建axios实例
console.log('baseUrl',process.env.REACT_APP_BASE_API)
const axiosRequet = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // api 的 base_url
  timeout: config.timeout // 请求超时时间
})

// request拦截器
axiosRequet.interceptors.request.use(
  config => {
    console.log('interceptors->request:',store)
    store.dispatch(loading())
    if (getToken()) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log('Request error',error) // for debug
    Promise.reject(error)
  }
)
// request拦截器
axiosRequet.interceptors.response.use(
  response => {
    console.log('interceptors->response')
    store.dispatch(unloading())
    return response
  },
  error => {
    // Do something with request error
    store.dispatch(unloading())
    Promise.reject(error)
  }
)
const request={
  get: function(url,data) {
    return new Promise((resolve, reject) => {
      axiosRequet({
        method: 'get',
        url: url,
        data: data?data:{}
      }).then(function(response){
        
        if(response&&200===response.status){
          console.log(response);
          if(200===response.data.code) {
            resolve(response.data.data)
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
      console.log('data:',data)
      axiosRequet({
        method: 'post',
        url: url,
        data: data?data:{}
      }).then(function(response){
        console.log('post result:',response);
        if(200===response.status){
          if(200===response.data.code) {
            resolve(response.data.data)
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
      axiosRequet({
        method: 'put',
        url: url,
        data: data?data:{}
      }).then(function(response){
        console.log(response);
        if(200===response.status){
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
      axiosRequet({
        method: 'delete',
        url: url,
        data: data?data:{}
      }).then(function(response){
        console.log(response);
        if(200===response.status){
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
