/*
 * @Author: kkt 670335957@qq.com
 * @Date: 2022-08-03 10:40:33
 * @LastEditors: kkt 670335957@qq.com
 * @LastEditTime: 2022-08-04 17:40:33
 * @FilePath: \cenkuntao\代码\ResponsiveLayout\study\study\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import StackedColumnChart from './components/stackedcolumnchart'
import ColumnChart from './components/columnChart'
import LineChart from './components/linechart'

export default function App() {
  return (
    <div>
      <LineChart/><br/><br/><br/><br/>
      <StackedColumnChart/><br/><br/><br/><br/>
      <ColumnChart/><br/><br/><br/><br/>
    </div>
  )
}
