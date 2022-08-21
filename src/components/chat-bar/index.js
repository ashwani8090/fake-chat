import React, { useCallback } from 'react';
import emoji from '../../assets/images/happy-face.png';
import { SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './styles.css';

const ChatBar = ({ onPress = () => { }, customStyle = {} }) => {
    const [message, setMessage] = React.useState('');
    const emojiFace = <img height={20} width={20} src={emoji} alt="emoji" />

    const onSend = useCallback((e) => {
        if (message) {
            onPress(message);
        }
        setMessage('');
        e?.preventDefault();
    }, [message, onPress]);

    return (<form className='chat-bar' style={{ ...customStyle }} onSubmit={onSend}>
        <Input
            value={message}
            placeholder='Enter your message here'
            onChange={(e) => { setMessage(e.target.value) }}
            addonAfter={emojiFace} />
        <button className='chatbox-send-btn' onClick={onSend}>
            <span className='chat-box-text'>Send</span>
            <SendOutlined />
        </button>
    </form>
    )
}

export default ChatBar;