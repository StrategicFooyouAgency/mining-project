import React, {useState} from 'react';
import './CustomTab.scss';
import classNames from "classnames";

const CustomTab = (props) => {
    const {className, data = [], onChange, selectedTabKey = ''} = props;
    const tabChange = (data) => {
        onChange && onChange(data.key, data)
    }
    return (
        <div className={classNames('CustomTab', className)}>
            <div className="CustomTab-header">
                {
                    data.map(item => (
                        <div onClick={() => {
                            tabChange(item)
                        }} key={item.key} className={classNames('CustomTab-header-item', {
                            'CustomTab-header-item-active': item.key === selectedTabKey
                        })}>{item.title}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomTab;