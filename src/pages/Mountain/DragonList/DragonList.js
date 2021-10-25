import React, {useState, useEffect} from 'react';
import './DragonList.scss';
import classNames from "classnames";
import dayjs from "dayjs";

const DragonList = props => {
    const {onCancel, type} = props;
    const [listProps, setListProps] = useState({
        data: [],
        selectedData: ''
    })
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 18; i++) {
            arr.push(i)
        }
        setListProps(state => ({
            ...state,
            data: arr
        }))
    }, [])
    return (
        <div className='DragonList'>
            <div className="DragonList-list">
                {
                    listProps.data.map((item) => {
                        return (
                            <div key={item} className={classNames('DragonList-list-item', {
                                'DragonList-list-item-active': item === listProps.selectedData
                            })}>
                                <div className="DragonList-list-item-dragon"/>
                                {
                                    type === 'dragonList' ?
                                        <div className="DragonList-list-item-count">
                                            Breed count: 2
                                        </div>
                                        :
                                        <div className="DragonList-list-item-time">
                                            {dayjs().format('HH:mm:ss')}
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="DragonList-btn">
                <div className="DragonList-btn-select">Select</div>
                <div className="DragonList-btn-cancel" onClick={() => {
                    onCancel && onCancel()
                }}>Cancel
                </div>
            </div>
        </div>
    )
}

export default DragonList;