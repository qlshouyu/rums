import Cookies from 'js-cookie'
import config from '../config'

const TokenKey = config.TokenKey

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token:string, rememberMe:Boolean) {
  if (rememberMe) {
    return Cookies.set(TokenKey, token, { expires: config.tokenCookieExpires })
  } else return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
