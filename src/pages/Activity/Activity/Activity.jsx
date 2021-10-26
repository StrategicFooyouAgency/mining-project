import React, { useState } from 'react';
import Swiper from '../../../components/Swiper';
import './Activity.scss';
import WithdrawModal from './WithdrawModal/WithdrawModal'

const Activity = () => {
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const handelOpenModal = () => {
        if (showWithdrawModal) return;
        setShowWithdrawModal(true);
    }
    const handelCloseModal = () => {
        setShowWithdrawModal(false);
    }
    return (
        <div>
            <div id="activityActivity">
                {
                    showWithdrawModal && <WithdrawModal handelCloseModal={handelCloseModal} />
                }
                <Swiper />
                <div className="ore-pool">
                    <div className='ore-pool-content'>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className='ore-pool-content-inner'>
                                <div className='ore-pool-content-inner-item'>
                                    <div className='ore-pool-content-inner-a'></div>
                                    <div className="ore-pool-content-inner-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div className='ore-pool-content-inner-b'>
                                            <div>#99999</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Current</div>
                                                <div>0.006 USDT</div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Time</div>
                                                <div>00:19:47</div>
                                            </div>
                                        </div>
                                        <div className="ore-pool-content-inner-btn1" onClick={ handelOpenModal}>
                                            Bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ore-pool-content-inner'>
                                <div className='ore-pool-content-inner-item'>
                                    <div className='ore-pool-content-inner-a'></div>
                                    <div className="ore-pool-content-inner-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div className='ore-pool-content-inner-b'>
                                            <div>#99999</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Current</div>
                                                <div>0.006 USDT</div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Time</div>
                                                <div>00:19:47</div>
                                            </div>
                                        </div>
                                        <div className="ore-pool-content-inner-btn1" onClick={ handelOpenModal}>
                                            Bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ore-pool-content-inner'>
                                <div className='ore-pool-content-inner-item'>
                                    <div className='ore-pool-content-inner-a'></div>
                                    <div className="ore-pool-content-inner-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div className='ore-pool-content-inner-b'>
                                            <div>#99999</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Current</div>
                                                <div>0.006 USDT</div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Time</div>
                                                <div>00:19:47</div>
                                            </div>
                                        </div>
                                        <div className="ore-pool-content-inner-btn1" onClick={ handelOpenModal}>
                                            Bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ore-pool-content-inner'>
                                <div className='ore-pool-content-inner-item'>
                                    <div className='ore-pool-content-inner-a'></div>
                                    <div className="ore-pool-content-inner-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div className='ore-pool-content-inner-b'>
                                            <div>#99999</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Current</div>
                                                <div>0.006 USDT</div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Time</div>
                                                <div>00:19:47</div>
                                            </div>
                                        </div>
                                        <div className="ore-pool-content-inner-btn1" onClick={ handelOpenModal}>
                                            Bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ore-pool-content-inner'>
                                <div className='ore-pool-content-inner-item'>
                                    <div className='ore-pool-content-inner-a'></div>
                                    <div className="ore-pool-content-inner-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div className='ore-pool-content-inner-b'>
                                            <div>#99999</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Current</div>
                                                <div>0.006 USDT</div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Time</div>
                                                <div>00:19:47</div>
                                            </div>
                                        </div>
                                        <div className="ore-pool-content-inner-btn1" onClick={ handelOpenModal}>
                                            Bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ore-pool-content-inner'>
                                <div className='ore-pool-content-inner-item'>
                                    <div className='ore-pool-content-inner-a'></div>
                                    <div className="ore-pool-content-inner-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div className='ore-pool-content-inner-b'>
                                            <div>#99999</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Current</div>
                                                <div>0.006 USDT</div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Time</div>
                                                <div>00:19:47</div>
                                            </div>
                                        </div>
                                        <div className="ore-pool-content-inner-btn1" onClick={ handelOpenModal}>
                                            Bid
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ore-pool-content-inner'>
                                <div className='ore-pool-content-inner-item'>
                                    <div className='ore-pool-content-inner-a'></div>
                                    <div className="ore-pool-content-inner-col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <div className='ore-pool-content-inner-b'>
                                            <div>#99999</div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Current</div>
                                                <div>0.006 USDT</div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>Time</div>
                                                <div>00:19:47</div>
                                            </div>
                                        </div>
                                        <div className="ore-pool-content-inner-btn1" onClick={ handelOpenModal}>
                                            Bid
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;