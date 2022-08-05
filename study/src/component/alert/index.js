import { Alert } from 'antd';
import React from 'react';
import './index.css'


export default function Index(props) {
var [opacity, setOpacity] = React.useState(0)
var time1, time2;
//增加透明度
const addOpacity = () => {
    if (opacity > 1) {
        clearInterval(time1);
        time2 = setInterval(deleteOpacity, 75)
    }
    opacity += 0.1;
    setOpacity(opacity)
}
//减少透明度
const deleteOpacity = () => {
    if (opacity < 0) {
        clearInterval(time2);
    }
    opacity -= 0.05;
    setOpacity(opacity)
}
    React.useEffect(()=>{
      if(!time1){
        time1 = setInterval(addOpacity, 50);
      }
    },[])
 
  return (
    <div>
      {props.type?<Alert className='alert-test' style={{opacity}} message={props.msg} type="success" showIcon />:<Alert className='alert-test' style={{opacity}} message={props.msg} type="error" showIcon /> }
    </div>
  )
}

