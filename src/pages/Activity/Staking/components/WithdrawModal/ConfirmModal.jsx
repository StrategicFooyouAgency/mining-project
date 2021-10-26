import React, { useState } from 'react';
import './ConfirmModal.scss';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import '../../../../MyAccount/Account/Account.scss'
const { TabPane } = Tabs;
function ConfirmModal(props) {

  const renderBtn = (btnItem) => {
    return (
      <button style={{ position: 'static' }} className={`btn-${btnItem.color}`}>{btnItem.name}</button>
    )
  }
  return (
    <div className={'ConfirmModal'}>
      <div className={'ConfirmModal-content'}>
        <img className={'modal-blackimg'} src={require('../../../../../assets/images/mountain/asset-j1.png').default} alt="" />
        <div className={'close-btn'} onClick={props.handleCloseConfirmModal}></div>
        <div className={'ConfirmModal-body'}>
          <div className="dragon">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Stake" key="1" class="defi-dragon">
                <div className="dragon-content">
                  <button className={'amount-btn'}>Amount</button>
                  <div className={'input-box'}>
                    <input type="text" value={'0'} />

                  </div>
                  <button className={'max-btn'}>Max</button>
                </div>
                <div className='part-first'>
                  <span>Wallet Balance</span>
                  <span>-CST</span>
                </div>
                <div className={'ConfirmModal-desciption'}>
                  <div className={'title'}>Enter CST stake duration</div>
                  <div className={'desciption-item'}>
                    <div className={'title-name'}>Short</div>
                    {
                      [{ name: '7 days', color: 'black' }, { name: '14 days', color: 'black' }].map((item, index) => (
                        <div key={index}>
                          {renderBtn(item)}
                        </div>
                      ))
                    }
                  </div>
                  <div className={'desciption-item'}>
                    <div className={'title-name'}>Mid</div>
                    {
                      [{ name: '1 month', color: 'black' }, { name: '3 month', color: 'black' }, { name: '6 month', color: 'black' }].map((item, index) => (
                        <div key={index}>
                          {renderBtn(item)}
                        </div>
                      ))
                    }
                  </div>
                  <div className={'desciption-item'}>
                    <div className={'title-name'}>Long</div>
                    {
                      [{ name: '1 year', color: 'black' }, { name: '2 year', color: 'black' }, { name: '3 year', color: 'blue' }].map((item, index) => (
                        <div key={index}>
                          {renderBtn(item)}
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className={'assets-content-inner-btn1-box'}>
                  <div className="assets-content-inner-btn1">Confirm to Stake</div>
                </div>
              </TabPane>
              <TabPane tab="WithDraw" key="2">
                <div className={'WithDraw-modal'}>
                  <div>When the Pledge CST countdown reaches 0, the farming boost will end.</div>
                  <div>You need to retrieve the corresponding CST manually. Staking and</div>
                  <div>transfering will effect the time to retrieve CST tokens.</div>
                </div>
                <div className='part-first'>
                  <span>GOV POOL</span>
                </div>
                <div className={'WithDraw-modal-list'}>
                  <div className={'WithDraw-modal-item'} style={{width:'141px'}}>
                    <div className={'WithDraw-modal-item-title'}>
                      Duration
                    </div>
                    {
                      [{ name: 'Short', color: 'black' }, { name: 'Mid', color: 'black' }
                        , { name: 'Long', color: 'black' }].map((item, index) => (
                          <div key={index} style={{marginBottom:'28px'}}>
                            {renderBtn(item)}
                          </div>
                        ))
                    }
                  </div>
                  <div className={'WithDraw-modal-item'} style={{marginLeft:'69px'}}>
                    <div className={'WithDraw-modal-item-title'}>
                      To be claimed
                    </div>
                    {
                      [{ name: '1000', color: 'black' }, { name: '5000', color: 'black' }
                        , { name: '15000', color: 'black' }].map((item, index) => (
                          <div key={index} style={{width:'141px',margin:'0 auto 28px'}}>
                            {renderBtn(item)}
                          </div>
                        ))
                    }
                  </div>
                  <div className={'WithDraw-modal-item'} style={{marginLeft:'67px'}}>
                    <div className={'WithDraw-modal-item-title'}>
                    Countdown 
                    </div>
                    {
                      [{ name: 'receive', color: 'blue' }].map((item, index) => (
                        <div key={index} style={{marginBottom:'28px'}}>
                          {renderBtn(item)}
                        </div>
                      ))
                    }
                    <div className={'count-text'} style={{marginBottom:'28px'}}>00：25：33</div>
                    <div className={'count-text'} style={{marginBottom:'28px'}}>6 month</div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
