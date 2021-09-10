import request from "../utils/request"
export function getCodeImg() {
  return request.get('/auth/code')
}

export function login(user:any) {

  return request.post('/auth/login',user)
}

// 获取用户菜单
export function getUserMenus() {
  return request.get('/api/menus/build')
}