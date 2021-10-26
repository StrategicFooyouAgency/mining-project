import React from 'react';
import '../Staking/Staking.scss';
import ConfirmModal from './components/WithdrawModal/ConfirmModal'
import { useState } from 'react';
function Staking() {
  const [showModal,setShowModal] = useState(false);
  const handleOpenConfirmModal = () => {
    if(showModal) return;
    setShowModal(true);
  }
  const handleCloseConfirmModal = () => {
    setShowModal(false);
  }
  const [statisticsList, setStatisticsList] = useState([
    {
      value: `6,549,887(43%)`,
      label: 'Total CST Staked (% in circulation)'
    },
    {
      value: `60`,
      label: 'Average Stake Time(D)'
    },
    {
      value: `25800`,
      label: 'My CST stake amount'
    }
  ]);
  const value = [
    {
      value: `Buyback Pool`,
      label: '$7,549,887'
    },
    {
      value: `Buyback Pool`,
      label: '$7,549,887'
    },
    {
      value: `Buyback Pool`,
      label: '$7,549,887'
    },
    {
      value: `Buyback Pool`,
      label: '$7,549,887'
    },
  ]
  return (
    <div className={'staking-main'}>
      <img className={"content-background"} src={require('../../../assets/images/mountain/background-t613k3.png').default} alt="" />
      <div className={'staking-header'}>
        <div className={'header-list'}>
          {
            statisticsList.map((item, index) => (
              <div key={index} className={'header-btn-item'}>
                <div className={'btn-item-value'}>{item.label}</div>
                <div className={'btn-item-label'}>{item.value}</div>
              </div>
            ))
          }
        </div>
        <div className="assets-content-inner-btn1" onClick={handleOpenConfirmModal}>Stake Now</div>
      </div>
      <div className={'staking-content'}>
        <div className='part-first' style={{marginTop:'-10px'}}>
          Reward
        </div>
        <div className={'staking-content-inner'}>
          <div className={'innerlist-item'}>
            <div className={'inner-title'}>CST要求</div>
            <ul>
              <li>{'>3000'}</li>
              <li>{'>3000'}</li>
              <li>{'>30000'}</li>
              <li>{'>30000'}</li>
              <li>{'>30000'}</li>
              <li>{'>30000'}</li>
              <li>{'>300000'}</li>
              <li>{'>300000'}</li>
              <li>{'>300000'}</li>
              <li>{'>300000'}</li>
              <li>{'>300000'}</li>
            </ul>
          </div>
          <div className={'innerlist-item'}>
            <div className={'inner-title'}>可获得Food数量</div>
            <ul>
              <li>{'3000'}</li>
              <li>{'3000'}</li>
              <li>{'30000'}</li>
              <li>{'30000'}</li>
              <li>{'300000'}</li>
              <li>{'300000'}</li>
              <li>{'300000'}</li>
              <li>{'300000'}</li>
              <li>{'300000'}</li>
              <li>{'30000030'}</li>
              <li>{'300000000'}</li>
            </ul>
          </div>
          <div className={'innerlist-item'}>
            <div className={'inner-title'}>开启Nest数量</div>
            <ul>
              <li>+1</li>
              <li>+1</li>
              <li>+1</li>
              <li>+1</li>
              <li>+1</li>
              <li>+1</li>
            </ul>
          </div>
          <div className={'innerlist-item'}>
            <div className={'inner-title'}>可申购Super Chest数量</div>
            <ul>
              <li>3</li>
              <li>{' '}</li>
              <li>{'15'}</li>
              <li>{'25'}</li>
              <li>{' '}</li>
              <li>{'40'}</li>
              <li>{' '}</li>
              <li>{'60'}</li>
              <li>{'80'}</li>
              <li>{'100'}</li>
            </ul>
          </div>
          <div className={'innerlist-item'}>
            <div className={'inner-title'}>可申购Food Chest数量</div>
            <ul>
              <li>3</li>
              <li>{' '}</li>
              <li>{'15'}</li>
              <li>{'25'}</li>
              <li>{' '}</li>
              <li>{'40'}</li>
              <li>{' '}</li>
              <li>{'60'}</li>
              <li>{'80'}</li>
              <li>{'100'}</li>
            </ul>
          </div>
        </div>
        <div className='part-first'>
          Obtained
        </div>
        <div className={'staking-content-inner obtained-box'}>
          <div className={'obtained-item item-1'}>
            <img className={'obtained-item-img obtained-item-img1'} src={require('../../../assets/images/mountain/food.png').default} alt="" />
            <div className={'obtained-item-name obtained-item-name1'}>2,580,099.99</div>
          </div>
          <div className={'obtained-item item-2'}>
            <img className={'obtained-item-img obtained-item-img2'} src={require('../../../assets/images/mountain/==.png').default} alt="" />
            <div className={'obtained-item-name obtained-item-name2'}>+5</div>
          </div>
          <div className={'obtained-item item-3'}>
            <div className={'obtained-item-name obtained-item-name3'}>Max Super Rafle 12</div>
            <img className={'obtained-item-img obtained-item-img3'} src={require('../../../assets/images/mountain/asset-t616.png').default} alt="" />
            <div className={'obtained-item-name obtained-item-name3'}>Max Super Rafle 8</div>
            <img className={'obtained-item-img obtained-item-img3'} src={require('../../../assets/images/mountain/asset-t616.png').default} alt="" />
          </div>
        </div>
        <div className='part-first'>
          Buyback Pool
        </div>
        <div className='buyback-box'>
          <div className={'description-content'}>
            <div className={'description description-1'}>CST will add the corresponding proportion of daily revenue into the buyback pool.</div>
            <div className={'description description-2'}>CST will add the corresponding proportion of daily revenue into the buyback pool..........</div>
            <div className={'description description-3'}>CST will add the corresponding proportion of daily revenue into the buyback pool..........</div>
          </div>
          <div className={'tow-desciption'}>
              {
                value.map((item,index)=>(
                  <div className = {'part-second-item'} key={index}>
                      <div className={`part-second-item-text text-${index}`}>{item.value}</div>
                     <button className={'part-second-item-btn'}>{item.label}</button>
                   </div>
                ))
              }
          </div>
           <div className={'tree-desciption'}>
              <div className={'tree-1 tree-item'}>
                  <div className={'tree-title'}>Time</div>
                  <ul>
                    <li>xxx-xx-xx-hh:mm:ss</li>
                    <li>xxx-xx-xx-hh:mm:ss</li>
                    <li>xxx-xx-xx-hh:mm:ss</li>
                    <li>xxx-xx-xx-hh:mm:ss</li>
                    <li>xxx-xx-xx-hh:mm:ss</li>
                    <li>xxx-xx-xx-hh:mm:ss</li>
                  </ul>
              </div>

              <div className={'tree-2 tree-item'}>
                  <div className={'tree-title'}>Type</div>
                  <ul>
                    <li>Chest</li>
                    <li>Super Chest</li>
                    <li>Food Chest</li>
                    <li>Chest</li>
                    <li>Chest</li>
                    <li>Super Chest</li>
                  </ul>
              </div>

              <div className={'tree-3 tree-item'}>
                  <div className={'tree-title'}>Pricee</div>
                  <ul>
                  <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                  </ul>
              </div>

              <div className={'tree-4 tree-item'}>
                  <div className={'tree-title'}>Amount</div>
                  <ul>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                    <li>Sxx.xx</li>
                  </ul>
              </div>

              <div className={'tree-5 tree-item'}>
                  <div className={'tree-title'}>TX</div>
                  <ul>
                    <li>→</li>
                    <li>→</li>
                    <li>→</li>
                    <li>→</li>
                    <li>→</li>
                    <li>→</li>
                  </ul>
              </div>
           </div>
            <div className={'desciption-footer'}>{'View more>'}</div>
        </div>
      </div>
       {
         showModal && <ConfirmModal handleCloseConfirmModal={handleCloseConfirmModal} />
       }
    </div>
  );
}

export default Staking;
