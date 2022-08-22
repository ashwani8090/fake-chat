import React from 'react';
import { ExpandableList, ProfileCard, ChatBox } from '../../components';
import { MessageOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveUsers, setArchivedUsers, setUserDetails } from '../../redux/slices/persistedSlice';
import './styles.css';

const Messenger = () => {
    const activeUsers = useSelector((state) => state?.persistedSlice?.activeUsers);
    const defaultUser = activeUsers?.[0];
    const [selectedUser, setSelectedUser] = React.useState(defaultUser);
    const archivedUsers = useSelector((state) => state?.persistedSlice?.archivedUsers);
    const userDetails = useSelector((state) => state?.persistedSlice?.userDetails);
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);
    const [profileData,setProfileData] = React.useState(false);
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
                    onProfileIconClick={(data) => {
                        console.log('data: ', data);
                        if (profileData?.id === data?.id) {
                            setIsProfileOpen(false)
                            setProfileData(null);
                        } else {
                            setIsProfileOpen(true);
                            setProfileData(data);
                        }
                    }}
                    list={activeUsers} />
                <ExpandableList
                    onProfileIconClick={(data) => {
                        if (profileData?.id === data?.id) {
                            setIsProfileOpen(false)
                            setProfileData(null);
                        } else {
                            setIsProfileOpen(true);
                            setProfileData(data);
                        }
                    }}
                    title="Archived Conversations"
                    adjacentItemMsg={archivedUsers?.length}
                    list={archivedUsers} />
            </div>
            <div className='chat-box-container'>
                <ChatBox selectedUser={selectedUser}
                    onUserSelect={() => {
                        setIsProfileOpen(!isProfileOpen)
                    }} />
            </div>
            {isProfileOpen && <div className='right-side-panel'>
                <ProfileCard
                    onArchive={(data) => {
                        dispatch(setActiveUsers(activeUsers.filter((user) => user.id !== data.id)));
                        dispatch(setArchivedUsers([...(archivedUsers || []), { ...data, isArchived: true }]));
                    }}
                    canActive={false}
                    email={profileData?.email}
                    name={profileData?.name}
                    isOtherUser={true}
                    canArchive={true}
                    data={profileData}
                    onUnArchive={(data) => {
                        console.log('data: ', data);
                        dispatch(setArchivedUsers(archivedUsers.filter((user) => user.id !== data.id)));
                        dispatch(setActiveUsers([...(activeUsers || []), { ...data, isArchived: false }]));
                    }}
                    profileImg={profileData?.profileImage} />
            </div>}
        </div>
    )
}

export default Messenger;