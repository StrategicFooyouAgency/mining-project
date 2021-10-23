import React, { useState } from 'react';

import "./index.scss";
const abs = function (val) {
  let str = (val / 100).toFixed(2) + '';
  let intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ',');
  let dot = str.substring(str.length, str.indexOf("."))
  let ret = intSum + dot;
  return ret;
}
function Fram() {
  const [statisticsList, setStatisticsList] = useState([
    {
      value: `$ ${abs(37972994)}`,
      label: 'Total Staked'
    },
    {
      value: `8064 CST`,
      label: 'Daily Rewards'
    },
    {
      value: `17 CST`,
      label: 'Pending Rewards'
    },
    {
      value: ` ${abs(7927)}`,
      label: 'All My CST'
    }
  ])

  return (
    <div className='mountain-fram'>
      <div className='header'>
        <div className='statistics'>
          <span>Statistics</span>
        </div>
        <div className='statistics-list'>
          {statisticsList.map((item, index) => (
            <div className='item'>
              <div className='item-icon'></div>
              <div className='item-content'>
                <div className='value'>{item.value}</div>
                <div className='label'>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='content'>
        <div className='part-first'>
          Pledge CST
        </div>
        <div className='part-second'></div>
        <div className='part-third'>
          Swap
        </div>
        <div className='part-fourth'></div>
      </div>
    </div>
  );
}

export default Fram;
