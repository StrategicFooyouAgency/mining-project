import React from 'react';
import './MountainFormItem.scss';

const MountainFormItem = props => {
    return (
        <div className='MountainFormItem'>
            <div className="MountainFormItem-label">{props.label}</div>
            <div className="MountainFormItem-body">
                {props.children}
            </div>
        </div>
    )
}

export default MountainFormItem;