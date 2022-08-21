import React from 'react';
import emoji from '../../assets/images/happy-face.png';
import { SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './styles.css';

const ChatBar = ({ onPress = () => { }, customStyle = {} }) => {
    const [message, setMessage] = React.useState('');
    const emojiFace = <img height={20} width={20} src={emoji} alt="emoji" />

    return (<div className='chat-bar' style={{ ...customStyle }}>
        <Input placeholder='Enter your message here' onChange={setMessage} addonAfter={emojiFace} />
        <button className='chatbox-send-btn' onClick={() => onPress(message)}>
            <span className='chat-box-text'>Send</span>
            <SendOutlined />
        </button>
    </div>
    )
}

export default ChatBar;