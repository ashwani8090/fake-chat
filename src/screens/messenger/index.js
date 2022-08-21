import React from 'react';
import { ExpandableList, ProfileCard } from '../../components';
import { activeUsers } from './users';
import { MessageOutlined } from '@ant-design/icons';
import './styles.css';

const Messenger = () => {

    return (
        <div className='messenger'>
            <div className='messenger_left-side-panel'>
                <div className='messenger_title_container'>
                    <MessageOutlined className='messenger_title_icon' />
                    <span className='messenger_title'>
                        Quick Chat
                    </span>
                </div>
                <ProfileCard />
                <ExpandableList isExpanded title="Active Conversations" adjacentItemMsg={4} list={activeUsers} />
                <ExpandableList title="Archived Conversations" adjacentItemMsg={7} list={activeUsers} />
            </div>
            <div className='chat-box'>

            </div>
            <div className='right-side-panel'>
            </div>
        </div>
    )
}

export default Messenger;