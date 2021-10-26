import React, { useState } from 'react';
import './Chest.scss';
import Model from './Model1/index'
import ModelA from './Model2/index'
import ModelB from './Model3/index'

const Chest = () => {
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [showWithdrawModalA, setShowWithdrawModalA] = useState(false);
    const [showWithdrawModalB, setShowWithdrawModalB] = useState(false);
    const handelOpenModal = () => {
        if (showWithdrawModal) return;
        setShowWithdrawModal(true);
    }
    const handelCloseModal = () => {
        setShowWithdrawModal(false);
    }
    const handelOpenModalA = () => {
        if (showWithdrawModalA) return;
        setShowWithdrawModalA(true);
    }
    const handelCloseModalA = () => {
        setShowWithdrawModalA(false);
    }
    const handelOpenModalB = () => {
        if (showWithdrawModalB) return;
        setShowWithdrawModalB(true);
    }
    const handelCloseModalB = () => {
        setShowWithdrawModalB(false);
    }
    return (
        <div id="myActivityChest">
            {
                showWithdrawModal && <Model handelCloseModal={handelCloseModal} />
            }
            {
                showWithdrawModalA && <ModelA handelCloseModal={handelCloseModalA} />
            }
            {
                showWithdrawModalB && <ModelB handelCloseModal={handelCloseModalB} />
            }
            <div className="assets">
                <div className="assets-title">
                    Chest Raffle
                </div>
                <div className="assets-content">
                    <div className="assets-content-inner">
                        <div className="assets-content-inner-item">
                            <div className="assets-content-inner-a">Raffle</div>
                            <div className="assets-content-inner-b">Countdown</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="assets-content-inner-b">93:09:01</div>
                                <div className="assets-content-inner-b">93:09:01</div>
                                <div className="assets-content-inner-b">93:09:01</div>
                            </div>
                        </div>
                        <div className="assets-content-inner-dom">
                            <div className='assets-content-inner-dom-a'>
                                <div className='assets-content-inner-dom-a-box'>
                                    <div className='box-a'>

                                    </div>
                                    <div className='box-text'>Normal Chest</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className='item'>
                                        <div className='item-icon1'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon2'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon3'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon4'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='assets-content-inner-dom-a'>
                                <div className='assets-content-inner-dom-a-box'>
                                    <div className='box-a'>

                                    </div>
                                    <div className='box-text'>Normal Chest</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className='item'>
                                        <div className='item-icon1'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon2'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon3'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon4'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='assets-content-inner-dom-a'>
                                <div className='assets-content-inner-dom-a-box'>
                                    <div className='box-a'>

                                    </div>
                                    <div className='box-text'>Normal Chest</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className='item'>
                                        <div className='item-icon1'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon2'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon3'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='item-icon4'></div>
                                        <div className='item-content'>
                                            <div className='value'>62%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="assets-content-inner-btn">
                            <div className="assets-content-inner-btn1" onClick={handelOpenModal}>Participate</div>
                            <div className="assets-content-inner-btn2" onClick={handelOpenModalA}>Participate</div>
                            <div className="assets-content-inner-btn3" onClick={handelOpenModalB}>Participate</div>
                        </div>
                        <div className='router'>Chest Rafle Rules>></div>
                    </div>
                </div>
            </div>

            <div className="dragon">
                <div className="dragon-title">
                    My Chest
                </div>
                <div className='dragon-content'>
                    <div className='dragon-content-inner'>
                        <div className='dragon-content-inner-1'>
                            <div style={{ width: 390, display: 'flex' }}>
                                <div className='item-a'>
                                    <div className='item-icon4'></div>
                                    <div className='item-content'>
                                        <div className='value'>6</div>
                                    </div>
                                </div>
                                <div className='item-a'>
                                    <div className='item-icon4'></div>
                                    <div className='item-content'>
                                        <div className='value'>3</div>
                                    </div>
                                </div>
                                <div className='item-a'>
                                    <div className='item-icon4'></div>
                                    <div className='item-content'>
                                        <div className='value'>1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-text" style={{ width: 370, display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="item-text-1">Normal Raffle Amount</div>
                                    <div>2897</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Chance</div>
                                    <div>9.76%</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ border: '1px solid #968CCB ', width: 738, marginBottom: 15, marginTop: 15 }} />
                        <div className='dragon-content-inner-1'>
                            <div className="item-text" style={{ width: 758, display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="item-text-1">My Stanking CST</div>
                                    <div>25800</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Max Super Raffle</div>
                                    <div>12</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Normal Raffle Amount</div>
                                    <div>25768/2000</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Chance</div>
                                    <div>9.76%</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ border: '1px solid #968CCB ', width: 738, marginBottom: 15, marginTop: 15 }} />
                        <div className='dragon-content-inner-1'>
                            <div className="item-text" style={{ width: 758, display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="item-text-1">My Stanking CST</div>
                                    <div>25800</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Max Super Raffle</div>
                                    <div>12</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Normal Raffle Amount</div>
                                    <div>25768/2000</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Chance</div>
                                    <div>9.76%</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ border: '1px solid #968CCB ', width: 738, marginBottom: 15, marginTop: 15 }} />
                        <div className='dragon-content-inner-1'>
                            <div className="item-text" style={{ width: 758, display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <div className="item-text-1">My Stanking CST</div>
                                    <div>25800</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Max Super Raffle</div>
                                    <div>12</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Normal Raffle Amount</div>
                                    <div>25768/2000</div>
                                </div>
                                <div>
                                    <div className="item-text-1">Chance</div>
                                    <div>9.76%</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ border: '1px solid #968CCB ', width: 738, marginBottom: 15, marginTop: 15 }} />
                        <div className='router2'>Viewlotteries record</div>
                        <div className='dragon-content-table'>
                            <table border="0" width="100%" cellspacing="0">
                                {/* <!--tr表示行--> */}
                                <tr style={{ height: 80 }}>
                                    {/* <!--td表示列--> */}
                                    <td align='center' style={{ fontSize: 24 }}>Time</td>
                                    <td align='center'>Type</td>
                                    <td align='center'>Raffle Amount</td>
                                    <td align='center'>Status</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    {/* <!--td表示列--> */}
                                    <td align='center'>xxx-xx-xx-hh:mm:ss</td>
                                    <td align='center'>Chest</td>
                                    <td align='center'>Super Chest </td>
                                    <td align='center'>Chest</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    {/* <!--td表示列--> */}
                                    <td align='center'>xxx-xx-xx-hh:mm:ss</td>
                                    <td align='center'>Chest</td>
                                    <td align='center'>9</td>
                                    <td align='center'>Success</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    {/* <!--td表示列--> */}
                                    <td align='center'>xxx-xx-xx-hh:mm:ss</td>
                                    <td align='center'>Super Chest</td>
                                    <td align='center'>9</td>
                                    <td align='center'>Success</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    {/* <!--td表示列--> */}
                                    <td align='center'>xxx-xx-xx-hh:mm:ss</td>
                                    <td align='center'>Chest</td>
                                    <td align='center'>9</td>
                                    <td align='center'>Success</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Chest;