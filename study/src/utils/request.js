/*
 * @Author: kkt 
 * @Date: 2022-08-04 10:28:56
 * @LastEditors: kkt 670335957@qq.com
 * @LastEditTime: 2022-08-04 16:23:31
 * @FilePath: \cenkuntao\代码\ResponsiveLayout\study\study\utils\request.js
 * @Description: 已封装的请求参数
 */
import axios from 'axios';

/**
 * @description: 以get方式发出的axios请求
 * @param {String} url
 * @return {Promise}
 */
export const axiosGet = (url) => {
  return new Promise((resolve,reject)=>{
    axios.get(url)
    .then(
      response=>resolve(response),
      error=>reject(error)
    )
  })
};
