import {
  http
} from '../../js_sdk/luch-request/index'
// 获取用户协议相关内容
export const GetSysContentByID = (params) => {
  return http.post('/api/WeiXinApplet.ashx', params)
}