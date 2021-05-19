import axios from 'axios'

export function request(config) {
  //1.创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',  //配置默认地址
    timeout: 5000   //设置延时
  })
  
  //2.配置拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  //3.发送网络请求
  return instance(config)
}