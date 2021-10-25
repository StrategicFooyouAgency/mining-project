import React, {useState, useEffect} from 'react';
import './DragonSelect.scss';
import classNames from "classnames";
import dayjs from "dayjs";

const DragonSelect = props => {
    const {onCancel, type} = props;
    const [listProps, setListProps] = useState({
        data: [],
        selectedData: ''
    })
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(i)
        }
        setListProps(state => ({
            ...state,
            data: arr
        }))
    }, [])
    return (
        <div className='DragonSelect'>
            <div className="DragonSelect-list">
                {
                    listProps.data.map((item) => {
                        return (
                            <div key={item} className={classNames('DragonSelect-list-item', {
                                'DragonSelect-list-item-active': item === listProps.selectedData
                            })}>
                                <div className="DragonSelect-list-item-dragon"/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="DragonSelect-btn">
                <div className="DragonSelect-btn-select">Select</div>
                <div className="DragonSelect-btn-cancel" onClick={() => {
                    onCancel && onCancel()
                }}>Cancel
                </div>
            </div>
        </div>
    )
}

export default DragonSelect;