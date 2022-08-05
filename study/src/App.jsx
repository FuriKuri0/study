// import {useRoutes} from 'react-router-dom'
// import routes from './routes'
// import 'antd/dist/antd.min.css'
// import './App.css'
import 'antd/dist/antd.min.css'
import './index.css'
import React, { useEffect } from 'react'
// import StackedColumnChart from './components/stackedcolumnchart'
// import ColumnChart from './components/columnChart'
// import LineChart from './components/linechart'

import G2 from './component/G2'
import MyAlert from './component/alert'

export default function App() {
    var [flag, setFlag] = React.useState(0)
    var time;
    const showAlert = () => {
        setFlag(1);
        if (!time) {
            time = setTimeout(() => setFlag(0), 2000)
        }
    }
    return (
        <div>
            {flag ? <MyAlert meg='警告内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊' /> : ''}
            <G2 />
            <button onClick={showAlert}>test</button>
            {/* <LineChart /><br /><br /><br /><br /> */}
            {/* <StackedColumnChart /><br /><br /><br /><br /> */}
            {/* <ColumnChart /><br /><br /><br /><br /> */}
        </div>
    )
}


