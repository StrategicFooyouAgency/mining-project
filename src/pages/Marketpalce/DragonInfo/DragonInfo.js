import React, {useState} from 'react';
import './DragonInfo.scss';
import redPng from './images/red.png';
import yellowPng from './images/yellow.png';
import bluePng from './images/blue.png';
import greenPng from './images/green.png';
import {Modal} from "antd";

const DragonInfo = props => {
    const [detailsInfo, setDetailsInfo] = useState(false);
    const [tipsModal, setTipsModal] = useState({
        visible: false,
        type: 'success'
    })
    const buyBtn = () => {
        setTipsModal(state => ({
            ...state,
            visible: true
        }))
    }

    return (
        <div className='DragonInfo'>
            {
                !detailsInfo ?
                    <div className='DragonInfo-common'>
                        <div className="DragonInfo-common-top">
                            <div className="DragonInfo-common-top-left">
                                <div className='DragonInfo-common-top-left-t'>#000000000001</div>
                                <div className='DragonInfo-common-top-left-b'>Breed count: 7</div>
                            </div>
                            <div className="DragonInfo-common-top-right">
                                <div className="DragonInfo-common-top-right-item"
                                     style={{background: `url(${redPng})`}}>Origin
                                </div>
                                <div className="DragonInfo-common-top-right-item"
                                     style={{background: `url(${greenPng})`}}>DLC_1
                                </div>
                                <div className="DragonInfo-common-top-right-item"
                                     style={{background: `url(${bluePng})`}}>DLC_2
                                </div>
                                <div className="DragonInfo-common-top-right-item"
                                     style={{background: `url(${yellowPng})`}}>DLC_3
                                </div>
                            </div>
                        </div>
                        <div className="DragonInfo-common-image-wrapper">
                            <div className="DragonInfo-common-image" onClick={() => {
                                setDetailsInfo(true)
                            }}/>
                        </div>
                        <div className="DragonInfo-common-number">
                            <div className="DragonInfo-common-l">{Number(25987.278).toLocaleString()}</div>
                            <div className="DragonInfo-common-r">$4567.32</div>
                        </div>
                    </div>
                    :
                    <div className='DragonInfo-details'>
                        <div className="DragonInfo-details-l">
                            <div className="DragonInfo-details-l-top">Hash Power: 168</div>
                            <div className="DragonInfo-details-l-image-wrapper">
                                <div className="DragonInfo-details-l-image"/>
                            </div>
                            <div className="DragonInfo-details-l-level">
                                <div className="DragonInfo-level-sign">LV 10</div>
                            </div>
                            <div className="DragonInfo-details-l-number">
                                <div
                                    className="DragonInfo-details-l-number-l">{Number(25987.278).toLocaleString()}</div>
                                <div className="DragonInfo-details-l-number-r">$4567.32</div>
                            </div>
                            <div className="DragonInfo-details-l-btn">
                                <div className="DragonInfo-buy-btn" onClick={buyBtn}>BUY</div>
                            </div>
                        </div>
                        <div className="DragonInfo-details-r">
                            <div className="DragonInfo-details-r-top">
                                <div className="DragonInfo-common-top-left">
                                    <div className='DragonInfo-common-top-left-t'>#000000000001</div>
                                    <div className='DragonInfo-common-top-left-b'>Breed count: 7</div>
                                </div>
                                <div className="DragonInfo-common-top-right">
                                    <div className="DragonInfo-common-top-right-item"
                                         style={{background: `url(${redPng})`}}>Origin
                                    </div>
                                    <div className="DragonInfo-common-top-right-item"
                                         style={{background: `url(${greenPng})`}}>DLC_1
                                    </div>
                                    <div className="DragonInfo-common-top-right-item"
                                         style={{background: `url(${bluePng})`}}>DLC_2
                                    </div>
                                    <div className="DragonInfo-common-top-right-item"
                                         style={{background: `url(${yellowPng})`}}>DLC_3
                                    </div>
                                </div>
                            </div>
                            <div className="DragonInfo-details-r-info">
                                <div className="DragonInfo-details-r-info-title">Information</div>
                                <div className="DragonInfo-details-r-info-body">
                                    <div className="DragonInfo-details-r-info-body-item">
                                        <div>HP</div>
                                        <div className='info-body-item-num'>99999 9999</div>
                                    </div>
                                    <div className="DragonInfo-details-r-info-body-item">
                                        <div>ATK</div>
                                        <div className='info-body-item-num'>9999</div>
                                    </div>
                                    <div className="DragonInfo-details-r-info-body-item">
                                        <div>DEF</div>
                                        <div className='info-body-item-num'>9999</div>
                                    </div>
                                    <div className="DragonInfo-details-r-info-body-item">
                                        <div>SPEED</div>
                                        <div className='info-body-item-num'>9999</div>
                                    </div>
                                </div>
                            </div>
                            <div className="DragonInfo-details-r-two">
                                <div className="DragonInfo-details-r-attr">
                                    <div className="DragonInfo-details-r-attr-title">Attribute</div>
                                    <div className="DragonInfo-details-r-attr-image">
                                        <div>
                                            <div
                                                className="DragonInfo-details-attr-item DragonInfo-details-attr-item-active-red">Fire
                                            </div>
                                            <div className="DragonInfo-details-attr-item">Water</div>
                                            <div className="DragonInfo-details-attr-item">Ground</div>
                                        </div>
                                        <div>
                                            <div className="DragonInfo-details-attr-item">Wind</div>
                                            <div className="DragonInfo-details-attr-item">Light</div>
                                            <div
                                                className="DragonInfo-details-attr-item DragonInfo-details-attr-item-active-dark">Dark
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="DragonInfo-details-r-skill">
                                    <div className="DragonInfo-details-r-skill-title">Skill</div>
                                    <div className="DragonInfo-details-r-skill-image">
                                        <div className="DragonInfo-details-skill-img"/>
                                        <div className="DragonInfo-details-skill-text">
                                            <div className="DragonInfo-details-skill-text-header">GAZE:</div>
                                            <div>Annotate the target,reduce defrnse by 10 points for 3 rounds.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="DragonInfo-details-r-parts">
                                <div className="DragonInfo-details-r-parts-title">Body Parts</div>
                                <div className="DragonInfo-details-r-parts-image">
                                    <div className="DragonInfo-parts-item">
                                        <div>Horn</div>
                                        <div>Icon</div>
                                    </div>
                                    <div className='DragonInfo-parts-item-split'></div>
                                    <div className="DragonInfo-parts-item">
                                        <div>Dorsum</div>
                                        <div>Icon</div>
                                    </div>
                                    <div>
                                        <div>Ordinary</div>
                                        <div>wings</div>
                                    </div>
                                    <div className="DragonInfo-parts-item">
                                        <div>Body</div>
                                        <div>Icon</div>
                                    </div>
                                    <div className='DragonInfo-parts-item-split'></div>
                                    <div className="DragonInfo-parts-item">
                                        <div>Tail</div>
                                        <div>Icon</div>
                                    </div>
                                    <div>Spikes</div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <Modal
                visible={tipsModal.visible}
                footer={null}
                destroyOnClose={true}
                onCancel={() => {
                    setTipsModal(state => ({
                        ...state,
                        visible: false
                    }))
                }}
                className={tipsModal.type === 'success' ? 'CustomNoHeaderDialog DragInfo-modal' : 'CustomTipDialog DragInfo-modal'}
                width='40vw'
                style={{height: '60vh'}}
            >
                {
                    tipsModal.type === 'success' ?
                        <div className='DragonInfo-tips-success'>
                            <div className="DragonInfo-tips-success-top">Waiting for confirmation</div>
                            <div className="DragonInfo-tips-success-middle"/>
                            <div className="DragonInfo-tips-success-bottom">
                                Please confirm this transaction in your wallet
                            </div>
                        </div>
                        :
                        <div className='DragonInfo-tips-fail'>
                            <div className="DragonInfo-tips-fail-top">Transaction Failed</div>
                            <div className="DragonInfo-tips-fail-middle"></div>
                            <div className="DragonInfo-tips-fail-btn">ok</div>
                        </div>
                }
            </Modal>
        </div>
    )
}
export default DragonInfo;