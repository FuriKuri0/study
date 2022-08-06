import './index.css'
import { Alert, Spin } from 'antd';
import React from 'react';

const App = (props) => (
  <Spin tip="Loading..."style={{position:'absolute',left:props.left,top:props.top}}>
    {/* <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    /> */}
  </Spin>
);

export default App;