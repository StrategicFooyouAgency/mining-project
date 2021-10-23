import "./FrontPage.scss";
import Egg from '../../../components/Egg/Egg';
import BuyBack from '../../../components/BuyBack/BuyBack';

import React, { Component } from 'react';

import ComboParts from '../../../components/ComboParts/ComboParts';

class FrontPage extends Component {
    render() {
        return (
            <div id="FrontPage">
                  <ComboParts width={256} height={256} parts={['goblin','goblingirl']} anim= "walk"/>
                <header>
                    <div className="icon"></div>
                    <div className="content">
                        <h2>Playcoin</h2>
                        <p>Stake Playcoin-BNB LP, earn Playcoin</p>
                    </div>
                </header>

                <div className="finished">
                    <a href="#">Finished &gt;&gt;</a>
                    <div className="box">
                        <div className="box-top">
                            <div className="icon"></div>
                            <div className="column">
                                <p>Playcoin-BNB LP</p>
                                <p>APY:xxx.xx%</p>
                            </div>
                            <div className="column">
                                <p>Total Staked</p>
                                <p>$103,462,284</p>
                            </div>
                            <div className="column">
                                <p>My Staked</p>
                                <p>116</p>
                            </div>
                            <div className="column">
                                <p>My points</p>
                                <p>1,685,456</p>
                            </div>
                            <div className="column">
                                <p>Rewards(Playcoin)</p>
                                <p>Rewards(Playcoin)</p>
                            </div>
                        </div>
                        <div className="box-bottom">
                            <div className="column">
                                <div className="avatar"></div>
                                <div className="name">Exchange</div>
                            </div>
                            <div className="column">
                                <div className="avatar"></div>
                                <div className="name">Exchange</div>
                            </div>
                            <div className="column">
                                <div className="avatar"></div>
                                <div className="name">Exchange</div>
                            </div>
                            <div className="column">
                                <div className="avatar"></div>
                                <div className="name">Exchange</div>
                            </div>
                            <div className="column">
                                <div className="avatar"></div>
                                <div className="name">Exchange</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="nft">
                    <h2>NFT Farmer Event</h2>
                    <p>When you meet the veMBOX or hash power requirements,you can participate in various limited-time MOMO farm events.</p>
                    <div className="ntf-btns">
                        <button className="ntf-btn">How to gei Playcoin</button>
                        <button className="ntf-btn">How to gei Hash Power</button>
                    </div>
                </div>

                <div className="open-eggs">
                    <h3>Open Eggs</h3>
                    <Egg></Egg>
                </div>
            
                <div className="points">
                    <h2>Points</h2>
                    <p>
                    Points will be the governance token for Playcoin and an important ticket for participating in Dragon farmer events.
                    </p>
                    <div className="box">
                        <div className="column">
                            <p>Total Playcoin Staked (% in circulation)</p>
                            <p>11,719,059(18.82%)</p>
                        </div>
                        <div className="column">
                            <p>Total Points</p>
                            <p>156914766</p>
                        </div>
                        <div className="column">
                            <p>Total Points</p>
                            <p>156914766</p>
                        </div>
                        <div className="column">
                            <p>Total Points</p>
                            <p>156914766</p>
                        </div>
                    </div>
                </div>
            
                <div className="buyback">
                    <h2>Buyback Pool</h2>
                    <p>Playcoin will add the corresponding proportion of daily revenue into the buyback pool. when the buyback price is triggered (72 hours Playcoin Avg price), the smart contract will automatically execute the buyback and burn. Otherwise, the funds will continue to accumulate.</p>
                    <div className="box">
                        <div className="column">
                            <p>Total Playcoin Staked (% in circulation)</p>
                            <p>11,719,059(18.82%)</p>
                        </div>
                        <div className="column">
                            <p>Total Points</p>
                            <p>156914766</p>
                        </div>
                        <div className="column">
                            <p>Total Points</p>
                            <p>156914766</p>
                        </div>
                        <div className="column">
                            <p>Total Points</p>
                            <p>156914766</p>
                        </div>
                    </div>
                </div>
            
                <BuyBack></BuyBack>
            </div>
        );
    }
}

export default FrontPage;