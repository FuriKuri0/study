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
    const [msg, setMsg] = React.useState({})
    var time;
    const showAlert = () => {
        React.axios('post', 'http://106.13.18.48/users', 60001,
            { username: 'FuriKuri0', password: 'Zxc2345665432' }).then(
                res => { setMsg({ msg: res.msg, type: 1 }); },
                error => setMsg({ msg: error, type: 0 }),
            )
        setFlag(1);
        if (!time) {
            time = setTimeout(() => setFlag(0), 2000)
        }
    }

    return (
        <div>
            {flag ? <MyAlert {...msg} /> : ''}
            <G2 />
            <button onClick={showAlert}>test</button>
            {/* <LineChart /><br /><br /><br /><br /> */}
            {/* <StackedColumnChart /><br /><br /><br /><br /> */}
            {/* <ColumnChart /><br /><br /><br /><br /> */}
        </div>
    )
}


