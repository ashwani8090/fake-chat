import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import mail from '../../assets/images/mail.png';
import profile from '../../assets/images/user.png';
import archive from '../../assets/images/archive.png';
import './styles.css';

const ProfileCard = ({
    name = "",
    designation = "",
    onChangeActive = () => { },
    isActive = false,
    profileImg = "",
    canActive = true,
    isOtherUser = false,
    email = "",
    canArchive = false,
    data = {},
    onArchive = () => { },
    onUnArchive = () => { }
}) => {

    return (
        <div className='profile-card'>
            <img className="profile_card_imge" src={profileImg} alt="profile" />
            <div>
                {!!name && !isOtherUser && <div className='profile_name'>
                    <div className='profile_card_name'>{name}</div>
                    <SettingOutlined className='gear_icon' />
                </div>}
                {!!designation && <div className='profile_designation'>
                    {designation}
                </div>}
                {canActive && <div className='active_container'>
                    <Switch size='small' className='switch' defaultChecked={isActive} onChange={onChangeActive} />
                    <span>{isActive ? 'Active' : 'Offline'}</span>
                </div>}
                {!!email && <div className='profile_email'>
                    <img className='margin-rt' src={mail} height={20} width={20} alt="mail" />
                    <span>
                        {email}
                    </span>
                </div>}
                {
                    isOtherUser &&
                    <div className='profile_card_name'>
                        <img className='margin-rt' src={profile} height={20} width={20} alt="mail" />
                        <span>
                            {name}
                        </span>
                    </div>
                }
                {canArchive &&
                    <div onClick={() => data?.isArchived ? onUnArchive(data) : onArchive(data)} className='archive_container'>
                        {<div >{data?.isArchived ? 'UnArchive' : 'Archive'}</div>}
                        <img className='margin-lt' color='blue' src={archive} height={20} width={20} alt="mail" />
                    </div>}

            </div>
        </div>
    )
}

export default ProfileCard;