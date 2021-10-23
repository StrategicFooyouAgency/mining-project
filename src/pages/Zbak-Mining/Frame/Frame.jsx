import React, { Component } from 'react';
import swapItemImg from './swap-item.png';

import "./Frame.scss";

class Frame extends Component {
    render() {
        return (
            <div id="frame">
                <div className="statis">
                    <h2>Static</h2>
                    <div className="statis-content">
                        <div className="statis-item">
                            <div className="avatar"></div>
                            <div className="statis-item-content">
                                <h3>$37,972,994</h3>
                                <p>Total Staked</p>
                            </div>
                        </div>
                        <div className="statis-item">
                            <div className="avatar"></div>
                            <div className="statis-item-content">
                                <h3>$37,972,994</h3>
                                <p>Total Staked</p>
                            </div>
                        </div>
                        <div className="statis-item">
                            <div className="avatar"></div>
                            <div className="statis-item-content">
                                <h3>$37,972,994</h3>
                                <p>Total Staked</p>
                            </div>
                        </div>
                        <div className="statis-item">
                            <div className="avatar"></div>
                            <div className="statis-item-content">
                                <h3>$37,972,994</h3>
                                <p>Total Staked</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swap">
                    <h2 class="swap-title">Swap</h2>
                    <div className="swap-content">
                        <div className="swap-item">
                            <img src={swapItemImg} alt="" />
                        </div>
                        <div className="swap-item">
                            <img src={swapItemImg} alt="" />
                        </div>
                        <div className="swap-item">
                            <img src={swapItemImg} alt="" />
                        </div>
                        <div className="swap-item">
                            <img src={swapItemImg} alt="" />
                        </div>
                        <div className="swap-item">
                            <img src={swapItemImg} alt="" />
                        </div>
                        <div className="swap-item">
                            <img src={swapItemImg} alt="" />
                        </div>
                        {/* <div className="swap-item">
                            <div className="header">
                                <div className="icon"></div>
                                <div className="title">
                                    <div className="title-top">CST-BUSD LP</div>
                                    <div className="title-bottom">
                                        <div className="badge">15X</div>
                                        <div className="badge">APR:3239%</div>
                                        <div className="badge">APR:3239%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="content-item">
                                    <div className="content-itme-left">Total Sketed</div>
                                    <div className="content-itme-right">1,755,341.617</div>
                                </div>
                                <div className="content-item">
                                    <div className="content-itme-left">Total USD VALUE</div>
                                    <div className="content-itme-right">$1,755,341,617</div>
                                </div>
                                <div className="content-item">
                                    <div className="content-itme-left">My Sketed</div>
                                    <div className="content-itme-right">0</div>
                                </div>
                                <div className="content-item">
                                    <div className="content-itme-left">Balance</div>
                                    <div className="content-itme-right">0</div>
                                </div>
                                <div className="content-item">
                                    <div className="content-itme-left">Rewards</div>
                                    <div className="content-itme-right">0</div>
                                </div>
                            </div>
                            <div className="fotter">
                                <a href="#" className="btn">Approve</a>
                                <a href="#" className="btn">Withraw</a>
                                <a href="#" className="btn">swap</a>
                                <a href="#" className="btn">Add lIq</a>
                            </div>
                        </div> */}
                     
                    </div>
                </div>
            </div>
        );
    }
}

export default Frame;