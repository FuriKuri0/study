import React from 'react';
// import {useRoutes} from 'react-router-dom'
// import routes from './routes'
// import 'antd/dist/antd.min.css'
// import './App.css'
import 'antd/dist/antd.min.css'

import G2 from './component/G2'
import Alert from './component/alert'
const trya = {
    he: 1,
    ha: 2,
    hei: 3
}
export default function App() {
    return (
        <div>
            <G2 />
            <Alert meg='警告内容' {...trya} />

        </div>
    )
}