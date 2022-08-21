import React from 'react';
import { ExpandableList, ProfileCard, ChatBox } from '../../components';
import { MessageOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../redux/slices/persistedSlice';
import './styles.css';

const Messenger = () => {
    const activeUsers = useSelector((state) => state?.persistedSlice?.activeUsers);
    const defaultUser = activeUsers?.[0];
    const [selectedUser, setSelectedUser] = React.useState(defaultUser);
    const archivedUsers = useSelector((state) => state?.persistedSlice?.archivedUsers);
    const userDetails = useSelector((state) => state?.persistedSlice?.userDetails);
    const dispatch = useDispatch();

    const onItemClick = (item) => {
        setSelectedUser(item);
    }

    return (
        <div className='messenger'>
            <div className='messenger_left-side-panel'>
                <div className='messenger_title_container'>
                    <MessageOutlined className='messenger_title_icon' />
                    <span className='messenger_title'>
                        Quick Chat
                    </span>
                </div>
                <ProfileCard
                    onChangeActive={(active) => {
                        dispatch(setUserDetails(({ ...userDetails, isActive: active })));
                    }}
                    name={userDetails?.name}
                    isActive={userDetails?.isActive}
                    designation={userDetails?.designation}
                    profileImg={userDetails?.profileImage} />
                <ExpandableList
                    defaultUser={defaultUser}
                    onRowClick={onItemClick}
                    isExpanded title="Active Conversations"
                    adjacentItemMsg={4}
                    list={activeUsers} />
                <ExpandableList
                    title="Archived Conversations"
                    adjacentItemMsg={archivedUsers?.length}
                    list={archivedUsers} />
            </div>
            <div className='chat-box-container'>
                <ChatBox selectedUser={selectedUser} />
            </div>
            <div className='right-side-panel'>
            </div>
        </div>
    )
}

export default Messenger;