import axios from 'axios'
import router from '../router'
import {
  Message,
  Loading
} from 'element-ui'
import qs from "qs";
import store from '../store/store.js'
let loadingInstance = null //这里是loading
// import app from "../main.js";


/****** 创建axios实例 ******/
const service = axios.create({
  baseURL: '/apis', // api的base_url
  timeout: 5000 // 请求超时时间
});


/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  // config.method === 'post' ?
  //   config.data = qs.stringify({ ...config.data
  //   }) :
  //   config.params = { ...config.params
  //   };
  if(store.state.token){
     config.headers['jToken'] = store.state.token;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
}, error => { //请求错误处理
  Message({
    message: error,
    type: 'error',
    duration: 2000
  })
  Promise.reject(error)
});

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  response => { //成功请求到数据
    setTimeout(()=>{
      loadingInstance.close()
    },500)
    //这里根据后端提供的数据进行对应的处理
    if (response.data.code === 0) {
      return response.data;
    } else {
      Message({
        message: response.data.msg,
        type: 'error',
        duration: 2000
      })
      if(response.data.code === 301){   //token失效重新登录
      console.log(111)
        router.replace('/');
      }
    }
  },
  error => { //响应错误处理
    console.log(JSON.stringify(error));

    let text = JSON.parse(JSON.stringify(error)).response.status === 404 ?
      '404' :
      '网络异常，请重试';
    Message({
      message: text,
      type: 'error',
      duration: 2000
    })

    return Promise.reject(error)
  }
);

export default service;
