import request from '@/utils/request'

// 获取登录接口
export function Login (username,password){
    return request({
       url:'/login',
       method:'POST',
       data:{username,password}
    })
}

// 获取退出接口
export function outLogin (username,password){
    return request({
       url:'/logout',
       method:'POST',
       data:{username,password}
    })
}

