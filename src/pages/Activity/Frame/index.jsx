import React, { useState } from 'react';
import SwapItemDetail from './components/SwapItemDetail/SwapItemDetail'
import "./index.scss";
import WithdrawModal from './components/WithdrawModal/WithdrawModal'
const abs = function (val) {
  let str = (val / 100).toFixed(2) + '';
  let intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ',');
  let dot = str.substring(str.length, str.indexOf("."))
  let ret = intSum + dot;
  return ret;
}
function Fram() {
  const [showWithdrawModal,setShowWithdrawModal] = useState(false);
  const handelOpenModal = () => {
    if(showWithdrawModal) return;
    setShowWithdrawModal(true);
  }
  const handelCloseModal = () => {
    setShowWithdrawModal(false);
  }
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
  const [pledgeList, setPledgeList] = useState([
    {
      value: `6,549,887(43%)`,
      label: 'Total CST Staked (% in circulation)'
    },
    {
      value: `125880`,
      label: 'Total Food'
    },
    {
      value: `60`,
      label: 'Average Stake Time(D)'
    },
    {
      value: `1580`,
      label: ' My Total Food'
    }
  ])

  const btnInformation = [
    {
      btnText:['Swap','Add Liquidity'],
      color:['black','black']
    },
    {
      btnText:['Add Liquidity On xxxx'],
      color:['black','black']
    },
    {
      btnText:['Start block 11,250,817 – End block 11,682,817'],
      color:['black','black']
    },
    {

    },
  ]
  return (
    <div className='mountain-fram'>
      <div className={'header'}>

        <div className={'statistics-title'}>
          <span>statistics</span>
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
        <img className={"content-background"} src={require('../../../assets/images/mountain/fram-2.png').default} alt="" />
        <div className='part-first'>
          Pledge CST
        </div>
        <div className='part-second'>
            <div className={'part-second-list'}>
              {
                pledgeList.map((item,index)=> (
                    <div className = {'part-second-item'} key={index}>
                        <div className={`part-second-item-text text-${index}`}>{item.label}</div>
                        <button className={'part-second-item-btn'}>{item.value}</button>
                    </div>
                ))
              }
            </div>
            <div className={'part-second-right'}>
                <img src={require('../../../assets/images/mountain/lihe.png').default} alt="" />
                <div className="assets-content-inner-btn1">Stake</div>
            </div>
        </div>
        <div className={'swap-plate'}>
            <div className='part-third part-first' style={{marginTop:'-8px'}}>
              Swap
            </div>
            <div className={'swap-plate-item'}>
              {
                btnInformation.map((item,index) => {
                  return <SwapItemDetail itemBtnInformation={item} key={index} showWithdrawModal={showWithdrawModal} handelOpenModal={handelOpenModal}/>
                })
              }
            </div>
        </div>
      </div>
      {
        showWithdrawModal && <WithdrawModal handelCloseModal={handelCloseModal}/>
      }
    </div>
  );
}

export default Fram;
