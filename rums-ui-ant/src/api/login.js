export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}