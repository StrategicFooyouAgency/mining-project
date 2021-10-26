import React from "react";
import './TopClassTable.scss'
const TopClassTable = (props) => {

    return(
        <div className = {'table-item'}>
            <div className={props.index > 2 ? `ranking-num low-ranking` : `high-ranking-${props.index} ranking-num`}>{props.index > 2 ? 4 : props.index +1}</div>
            <div className = {'two-name'}>
                <div className={'name'}>Leaderboard </div>
                <div className = {'account'}>0xc8...0495</div>
            </div>
            <div className = {'information'}>
                <div className={'information-text'}>Total Hash Power</div>
                <div className={'count'}>1029813</div>
            </div>
        </div>
    )
}

export default TopClassTable;