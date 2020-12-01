import axios from 'axios'
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: '2000',
    // withCredentials:true,
})
// 请求拦截
request.interceptors.request.use((config) => {
        config.headers['token'] = sessionStorage.getItem('token')
        return config
    },function(error){
        return Promise.reject(error)
    })

// 响应拦截
request.interceptors.response.use((res) => {

        return res
    },function(error){
        return Promise.reject(error)
    })
// 导出
export default request