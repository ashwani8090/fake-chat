import React from 'react';
import { SendOutlined } from '@ant-design/icons';

const ChatBar = ({ onPress = () => { } }) => {
    const [message, setMessage] = React.useState('');

    return (<div>
        <input onChange={(e) => {
            setMessage(e.target.value);
        }}
        type="text"
        placeholder="Enter your message here" />
        <div onClick={()=>onPress(message)}>
            <SendOutlined />
        </div>
    </div>
    )
}

export default ChatBar;