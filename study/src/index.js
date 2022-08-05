import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App'
import {HashRouter } from 'react-router-dom';
import axios from 'axios'
//读Cookie
function getCookie(cookieName) {
  const strCookie = document.cookie
  const cookieList = strCookie.split(';')

  for (let i = 0; i < cookieList.length; i++) {
    const arr = cookieList[i].split('=')
    if (cookieName === arr[0].trim()) {
      return arr[1]
    }
  }
  return ''
}
React.axios =(type,url,code,data,params) => {
  return new Promise((resolve,reject)=>{
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header')
    },
      method:type.toUpperCase(),
      url,
      data:JSON.stringify(data)||'',
      params:params||''
    })
    .then(
      response=>{
          if(code===response.data.code){
              resolve(response.data)//使用返回的data
          }    
        else{
          reject(response.data.msg)
        }
      },
      error=>reject(error)
    )
  })
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter><App /></HashRouter> 
  </React.StrictMode>
);