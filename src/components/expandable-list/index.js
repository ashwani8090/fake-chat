import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './styles.css';

const ExpandableList = ({ title, adjacentItemMsg, list = [], isExpanded = false }) => {
    const [expanded, setExpanded] = React.useState(isExpanded);
    const onExpand = () => {
        setExpanded(!expanded);
    }
    return (
        <div className='expandable-list'>
            <div className='expandable-list_header'>
                <div className='expandable-list_header_title_container'>
                    <h1 className='expandable-list_header_title'>{title}</h1>
                    <h2 className='expandable-list_adjacent_msg'>{adjacentItemMsg}</h2>
                </div>
                <div className='expandable-list_header_icon'>
                    {
                        expanded ?
                            <button onClick={onExpand} className="expandable-list_btn">
                                <UpOutlined />
                            </button> :
                            <button onClick={onExpand} className="expandable-list_btn">
                                <DownOutlined />
                            </button>
                    }
                </div>
            </div>
            <div className='scrollable'>
                {
                    expanded && <div>
                        {
                            list.map((item, index) => {
                                const { name, profileImage } = item;
                                return (
                                    <div key={index} className='expandable_item_card'>
                                        <img src={profileImage} alt={name} className='expandable_item_icon' />
                                        <div className='expandable_item_title'>{name}</div>
                                    </div>)
                            })
                        }
                    </div>
                }
            </div>
        </div >
    )
}

export default ExpandableList;