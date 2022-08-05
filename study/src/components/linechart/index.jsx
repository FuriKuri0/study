/*
 * @Author: kkt 670335957@qq.com
 * @Date: 2022-08-04 17:31:57
 * @LastEditors: kkt 670335957@qq.com
 * @LastEditTime: 2022-08-04 17:44:33
 * @FilePath: \cenkuntao\代码\ResponsiveLayout\study\study\src\components\linechart\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import {axiosGet} from '../../utils/request'

export default function LineChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosGet('http://localhost:8000/linechart')
        .then(
          response=>{
            setData(response.data.message);
  
          },
          error=>console.log(error),
        )
      }, []);

    const config = {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 5,
      },
      theme: 'dark',
    };

    return <Line {...config} />;
}
