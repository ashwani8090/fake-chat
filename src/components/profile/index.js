import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import './styles.css';

const ProfileCard = ({
    name = "Henry Boyd",
    designation = "Web Developer",
    onChange = () => { },
    isActive = false,
    profileImg = "https://www.eclipsegroup.co.uk/wp-content/uploads/2020/03/Round-Profile-Picture-768x768-1.png"
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
                  <Switch size='small' className='switch' defaultChecked={isActive} onChange={onChange} />
                 <span>{isActive ? 'Active': 'Offline'}</span>
                </div>

            </div>
        </div>
    )
}

export default ProfileCard;