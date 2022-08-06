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
import Loading from './component/loading'
import G2 from './component/G2'
import Search from './component/search'
import Upload from './component/upload'
export default function App() {
    //是否显示加载中
    const [load, setLoad] = React.useState()
    //flag是阀门，不允许狂点按钮
    const [flag, setFlag] = React.useState(1)
    const [msg, setMsg] = React.useState({})
    const showAlert = () => {
        if (flag) {
            setLoad({ left: '40.2895vw', top: '2.75vw' })
            setFlag(0)
            React.axios('post', 'http://106.13.18.48/users', 60001, setLoad, setFlag,
                { username: 'FuriKuri', password: 'Zxc2345665432' }).then(
                    res => {
                        console.log(res);
                    },
                )
        }
    }
    // useEffect(() => {
    //     console.log(msg, 'msg改变了');
    // }, [msg])
    return (
        <div>
            {/* <G2 /> */}
            {load ? <Loading {...load} /> : ''}
            <button onClick={showAlert}>test</button>
            <Search setMsg={setMsg} />
            <Upload />
            {/* <LineChart /><br /><br /><br /><br /> */}
            {/* <StackedColumnChart /><br /><br /><br /><br /> */}
            {/* <ColumnChart /><br /><br /><br /><br /> */}
        </div>
    )
}


