import { Alert } from 'antd';
import React from 'react';
import './index.css'


export default function Index(props) {
    const [flag,setFlag]=React.useState(true)
    React.useEffect(()=>{
      console.log(props);

    })
    const onClose = (e) => {
        console.log(e, 'I was closed.');
        setFlag(false)
      };
    const click = ()=>{
      console.log(1);
      setFlag(true)
    }
  return (
    <div>
        {flag? <Alert
        className='alert-test'
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />:''}
     <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
      
    />
    
    </div>
  )
}

