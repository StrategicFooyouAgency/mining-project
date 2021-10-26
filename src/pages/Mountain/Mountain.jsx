import React, {useState} from 'react';
import './Mountain.scss';
import MountainFormItem from "./MountainFormItem/MountainFormItem";
import itemBgBlue from './images/itemBgBlue.png';
import itemBgBlueAdd from './images/itemBgBlueAdd.png';
import itemBgLock from './images/itemBgLock.png';
import dayjs from 'dayjs';
import {Modal} from 'antd';
import DragonList from "./DragonList/DragonList";
import DragonSelect from "./DragonSelect/DragonSelect";

const Mountain = () => {

    const [dragonListModal, setDragonListModal] = useState({
        visible: false,
        type: 'dragonList'
    })

    const [tipsModal, setTipsModal] = useState({
        visible: false,
        type: 'success'
    })

    const openDragonListModal = () => {
        setDragonListModal(state => ({...state, visible: true, type: 'dragonList'}))
    }

    const BreedingBtn = () => {
        setTipsModal(state => ({...state, visible: true, type: 'success'}))
    }

    const openDragonPackage = () => {
        setDragonListModal(state => ({...state, visible: true, type: 'package'}))
    }

    const openAnimation = () => {
        setTipsModal(state => ({...state, visible: true, type: 'animation'}))
    }

    /**
     * 打开选龙挖矿功能
     */
    const openStake = () => {
        setDragonListModal(state => ({...state, visible: true, type: 'stake'}))
    }

    return (
        <div className='Mountain-wrapper'>
            <div className='Mountain'>
                <div className="Mountain-top">
                    <div className="Mountain-top-text">CST Mountain Pool</div>
                </div>
                <div className="Mountain-rewards">
                    <div className="Mountain-rewards-border"/>
                    <div className="Mountain-rewards-body">
                        <div className="Mountain-rewards-body-top">
                            <div className="Mountain-rewards-body-top-1">Daily Rewards: 200000</div>
                            <div className="Mountain-rewards-body-top-2">Today Remaining: 3, 124 CST</div>
                        </div>
                        <div className="Mountain-rewards-body-middle">
                            <div className="Mountain-rewards-body-middle-border"/>
                            <div className="Mountain-rewards-body-middle-contain">
                                <div className='Mountain-rewards-data'>
                                    <div className="Mountain-rewards-data-title">Pledge NFT to obran CST</div>
                                    <div className="Mountain-rewards-data-wrapper">
                                        <div className="Mountain-rewards-data-item">
                                            <div className="Mountain-rewards-data-item-closeIcon"/>
                                        </div>
                                        <div className="Mountain-rewards-data-item">
                                            <div className="Mountain-rewards-data-item-closeIcon"/>
                                        </div>
                                        <div className="Mountain-rewards-data-item">
                                            <div className="Mountain-rewards-data-item-closeIcon"/>
                                        </div>
                                        <div className="Mountain-rewards-data-item" onClick={openStake}>
                                            <div className="Mountain-rewards-data-item-btn">
                                                Stake
                                            </div>
                                        </div>
                                        <div className="Mountain-rewards-data-item" onClick={openStake}>
                                            <div className="Mountain-rewards-data-item-btn">
                                                Stake
                                            </div>
                                        </div>
                                        <div className="Mountain-rewards-data-item" onClick={openStake}>
                                            <div className="Mountain-rewards-data-item-btn">
                                                Stake
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Mountain-rewards-body-bottom">
                            <div className="Mountain-rewards-body-bottom1">
                                <div className="Mountain-rewards-body-bottom1-t">
                                    <MountainFormItem label='Total Hash Power'>
                                        17716654
                                    </MountainFormItem>
                                </div>
                                <div className="Mountain-rewards-body-bottom1-b">
                                    <MountainFormItem label='My Hash Power'>
                                        157
                                    </MountainFormItem>
                                </div>
                            </div>
                            <div className="Mountain-rewards-body-bottom2">
                                <MountainFormItem label='Mining Rate'>
                                    <div className='Mountain-rewards-body-bottom2-value'>
                                        <div>100 Hash Power≈1.12</div>
                                        <div style={{marginTop: '10px'}}>Food/DAY</div>
                                    </div>
                                </MountainFormItem>
                            </div>
                            <div className="Mountain-rewards-body-bottom3">
                                <MountainFormItem label='Earned'>
                                    <div className="Mountain-bottom3-left">cst+</div>
                                    <div className="Mountain-bottom3-right">
                                        <div className="Mountain-bottom3-right-color"/>
                                        <div
                                            className="Mountain-bottom3-right-num">{Number(1883.26).toLocaleString()}</div>
                                    </div>
                                </MountainFormItem>
                            </div>
                            <div className="Mountain-rewards-body-bottom-btn">Harvest</div>
                        </div>
                    </div>
                </div>
                <div className="Mountain-top">
                    <div className="Mountain-top-text">Hatching Nest</div>
                </div>
                <div className="Mountain-rewards Mountain-Hatching" style={{background: '#5EB277'}}>
                    <div className="Mountain-rewards-border"/>
                    <div className="Mountain-rewards-body Mountain-Hatching-body">
                        <div className="Mountain-Hatching-body-title">Hatch dragon eggs into Dragons</div>
                        <div className="Mountain-Hatching-body-wrapper">
                            <div className="Mountain-Hatching-body-item"
                                 style={{backgroundImage: `url(${itemBgBlue})`}}>
                                <div className="Mountain-Hatching-body-item-dragon"/>
                                <div className="Mountain-Hatching-body-item-btn" onClick={openAnimation}>Open</div>
                                <div className="Mountain-Hatching-body-item-ready"/>
                            </div>
                            <div className="Mountain-Hatching-body-item"
                                 style={{backgroundImage: `url(${itemBgBlue})`}}>
                                <div className="Mountain-Hatching-body-item-dragon"/>
                                <div className="Mountain-Hatching-body-item-close"/>
                                <div className="Mountain-Hatching-body-item-time">
                                    {dayjs().format('HH:mm:ss')}
                                </div>
                            </div>
                            <div className="Mountain-Hatching-body-item" onClick={openDragonPackage}
                                 style={{backgroundImage: `url(${itemBgBlueAdd})`}}></div>
                            <div className="Mountain-Hatching-body-item"
                                 style={{backgroundImage: `url(${itemBgLock})`}}></div>
                            <div className="Mountain-Hatching-body-item"
                                 style={{backgroundImage: `url(${itemBgLock})`}}></div>
                            <div className="Mountain-Hatching-body-item"
                                 style={{backgroundImage: `url(${itemBgLock})`}}></div>
                        </div>
                    </div>
                </div>
                <div className="Mountain-top">
                    <div className="Mountain-top-text">Breeding</div>
                </div>
                <div className="Mountain-rewards Mountain-Breeding" style={{background: '#CC9D45'}}>
                    <div className="Mountain-rewards-border"/>
                    <div className="Mountain-rewards-body Mountain-Breeding-body">
                        <div className="Mountain-Breeding-body-t">
                            <div className="Mountain-Breeding-body-t-l">
                                <div className="Mountain-Breeding-body-t-l-count">
                                    Breed count: 3
                                </div>
                                <div className="Mountain-Breeding-body-t-l-dragon"/>
                                <div className="Mountain-Breeding-body-t-l-ruby">
                                    Ruby: 250
                                </div>
                            </div>
                            <div className="Mountain-Breeding-body-t-m">
                                <div className="Mountain-rewards-body-middle-border"/>
                                <div className="Mountain-Breeding-middle">
                                    <div className='Mountain-Breeding-middle-contain'>
                                        <div className="Mountain-Breeding-middle-img"/>
                                        <div className="Mountain-Breeding-middle-num">
                                            <div className="Mountain-Breeding-middle-num-item">
                                                <div className="Mountain-Breeding-middle-num-item-color"
                                                     style={{backgroundColor: '#00B050'}}></div>
                                                <div className="Mountain-Breeding-middle-num-item-value">62%</div>
                                            </div>
                                            <div className="Mountain-Breeding-middle-num-item">
                                                <div className="Mountain-Breeding-middle-num-item-color"
                                                     style={{backgroundColor: '#00B0F0'}}></div>
                                                <div className="Mountain-Breeding-middle-num-item-value">74%</div>
                                            </div>
                                            <div className="Mountain-Breeding-middle-num-item">
                                                <div className="Mountain-Breeding-middle-num-item-color"
                                                     style={{backgroundColor: '#C01FA0'}}></div>
                                                <div className="Mountain-Breeding-middle-num-item-value">33%</div>
                                            </div>
                                            <div className="Mountain-Breeding-middle-num-item">
                                                <div className="Mountain-Breeding-middle-num-item-color"
                                                     style={{backgroundColor: '#ED7D31'}}></div>
                                                <div className="Mountain-Breeding-middle-num-item-value">97%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Mountain-Breeding-body-t-r" onClick={openDragonListModal}>
                                <div className="Mountain-Breeding-body-t-l-count">
                                    Breed count: 3
                                </div>
                                <div className="Mountain-Breeding-body-t-l-ruby">
                                    Ruby: --
                                </div>
                            </div>
                        </div>
                        <div className="Mountain-Breeding-body-b">
                            <div className="Mountain-Breeding-body-b-expense">
                                <div style={{marginLeft: '-30px'}}>All Expenses:</div>
                                <div>
                                    <div>Ruby: 800</div>
                                    <div>CST:5</div>
                                </div>
                            </div>
                            <div className="Mountain-Breeding-body-b-btn" onClick={BreedingBtn}>Start Breeding</div>
                        </div>
                    </div>
                </div>

                <Modal
                    title=' '
                    visible={dragonListModal.visible}
                    className='CustomDialog'
                    width='47vw'
                    onCancel={() => {
                        setDragonListModal(state => ({...state, visible: false}))
                    }}
                    footer={null}
                    maskClosable={false}
                    destroyOnClose={true}
                >
                    {
                        dragonListModal.type === 'stake' ?
                            <DragonSelect onCancel={() => {
                                setDragonListModal(state => ({...state, visible: false}))
                            }}/>
                            :
                            <DragonList type={dragonListModal.type} onCancel={() => {
                                setDragonListModal(state => ({...state, visible: false}))
                            }}/>
                    }
                </Modal>

                <Modal
                    visible={tipsModal.visible}
                    className='CustomTipDialog'
                    width='40vw'
                    style={{height: '50vh'}}
                    onCancel={() => {
                        setTipsModal(state => ({...state, visible: false}))
                    }}
                    footer={null}
                    destroyOnClose={true}
                >
                    {
                        tipsModal.type === 'animation' ?
                            ''
                            :
                            <div className="Mountain-tips">
                                <div className="Mountain-tips-success"/>
                                <div className="Mountain-tips-btn" onClick={() => {
                                    setTipsModal(state => ({...state, visible: false}))
                                }}>OK
                                </div>
                            </div>
                    }
                </Modal>

            </div>
        </div>
    )
}

export default Mountain;