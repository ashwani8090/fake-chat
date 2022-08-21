import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import './styles.css';

const ProfileCard = ({
    name = "",
    designation = "",
    onChangeActive = () => { },
    isActive = false,
    profileImg = ""
}) => {

    return (
        <div className='profile-card'>
            <img className="profile_card_imge" src={profileImg} alt="profile" />
            <div>
                <div className='profile_name'>
                    <div className='profile_card_name'>{name}</div>
                    <SettingOutlined className='gear_icon' />
                </div>
                <div className='profile_designation'>
                    {designation}
                </div>
                <div className='active_container'>
                  <Switch size='small' className='switch' defaultChecked={isActive} onChange={onChangeActive} />
                 <span>{isActive ? 'Active': 'Offline'}</span>
                </div>

            </div>
        </div>
    )
}

export default ProfileCard;