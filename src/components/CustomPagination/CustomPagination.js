import React from 'react';
import './CustomPagination.scss';

const CustomPagination = props => {
    return (
        <div className='CustomPagination'>
            <div className="CustomPagination-left-arrow"><div className="left-arrow"/></div>
            <div style={{margin: '0 10px'}}>Page</div>
            <div className="CustomPagination-page">1</div>
            <div style={{margin: '0 10px'}}>of 100000</div>
            <div className="CustomPagination-right-arrow"><div className="right-arrow"/></div>
        </div>
    )
}

export default CustomPagination;