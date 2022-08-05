/*
 * @Author: kkt 670335957@qq.com
 * @Date: 2022-08-04 15:43:04
 * @LastEditors: kkt 670335957@qq.com
 * @LastEditTime: 2022-08-04 17:26:32
 * @FilePath: \cenkuntao\代码\ResponsiveLayout\study\study\src\components\columnChart\stackedcolumnchart\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react'
import { Column } from '@ant-design/plots';
// import axios from 'axios';
import { axiosGet } from '../../utils/request'

export default function StackedColumnChart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axiosGet('http://localhost:8000/columnchart')
      .then(
        response => {
          setData(response.data.message);

        },
        error => console.log(error),
      )
  }, []);

  const config = {
    data,
    isStack: true,
    isPercent: true,
    xField: 'year',
    yField: 'value',
    // 设置堆叠柱状图 堆叠柱状图的要求在于此 与 数据源 type即被堆叠者
    seriesField: 'type',
    label: {
      position: {
        position: 'middle',
      },
      // item 为数据源中的每一条数据 value为数据源中的值 是你自己定义的 
      // iePresent之后就变成了百分比
      // toFixed() 将Number转化为指定小数位数的String
      content: (item) => {
        return item.value.toFixed(2);
      },
    },
  };

  return <Column {...config} />;
}
