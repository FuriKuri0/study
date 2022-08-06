import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
};

const App = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const formDataImg = new FormData();
    const UpLoad = (e) => {
        setLoading(true);
        formDataImg.append('file1', e.file);
        formDataImg.append('type', 'user');
        formDataImg.append('id', React.getCookie('user'));
        console.log(formDataImg, 'formDataImg');
        console.log(e, '开始上传');
        React.axios('post', 'http://106.13.18.48/files/uploadImg', 90101, '', '', formDataImg).then(res => {
            console.log(res);
            getBase64(e.file, (url) => {
                setLoading(false);
                // setImageUrl(url);
            });
        })
    }
    const download = () => {
        React.axios('get', 'http://106.13.18.48/files/downloadImg?type=user&id=6', 90201, '', '', '', '', '', 1).then(res => { console.log(res, '???'); setImageUrl(res) })

    }
    // const handleChange = (info) => {
    //     console.log(info);
    //     if (info.file.status === 'uploading') {
    //         return;
    //     }

    //     if (info.file.status === 'done') {
    //         // Get this url from response in real world.
    //         getBase64(info.file.originFileObj, (url) => {
    //             setLoading(false);
    //             setImageUrl(url);
    //         });
    //     }
    // };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <div> <Upload
            name="file1"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            customRequest={UpLoad}
            beforeUpload={beforeUpload}
        // onChange={handleChange}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
            <Button onClick={download} type="primary" shape="round" icon={<DownloadOutlined />} >
                Download
            </Button><img src={imageUrl} alt="" /></div>

    );
};

export default App;