import React from 'react'
import { Chart } from '@antv/g2'
import { useEffect } from 'react'
import { Pie } from '@antv/g2plot';
import './index.css'
// 定义的图表数据  可以从接口获取  然后自己转成需要的格式
const data = [
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
];

export default function Index() {
    useEffect(() => {
        const tempNode = document.getElementById('container')
        const child = tempNode?.lastElementChild
        if (child) {
            // 这里我做了一个判断  防止饼图重复渲染 但是直接操作了dom 
            // 如果有更好的方法 可以换掉
            tempNode.removeChild(child)
        }
        const piePlot = new Pie('container', {
            appendPadding: 10,
            data,
            autoFit: true,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            // innerRadius: .1,

            padding: 'auto',
            label: {
                type: 'inner',
                offset: '-30%',
                content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                style: {
                    fontSize: 14,
                    textAlign: 'center',
                },
            },
            interactions: [{ type: 'element-active' }],
        });
        piePlot.render();
    }, [])





















    return (
        <div id="container" style={{ position: 'absolute', left: '250px', top: '50px' }}>
        </div>
    )
}
