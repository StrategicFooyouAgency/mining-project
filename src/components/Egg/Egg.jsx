
import './Egg.scss';

import React, { Component } from 'react';

class Egg extends Component {
    render() {
        return (
            <div id="egg">
               
                <div className="egg-details">
                    <div className="egg-figure">
                        <div className="tips">
                            Total Dragon unlocked
                            <br/>
                            842,146
                        </div>
                        <img class="egg-image" alt=""/>
                    </div>
                    <div className="egg-params">
                        <div className="column">
                            <div className="tittle">Common</div>
                            <div className="content">60%</div>
                        </div>
                        <div className="column">
                            <div className="tittle">Rare</div>
                            <div className="content">36.5%</div>
                        </div>
                        <div className="column">
                            <div className="tittle">Epic</div>
                            <div className="content">3.0%</div>
                        </div>
                        <div className="column">
                            <div className="tittle">Legend</div>
                            <div className="content">0.5%</div>
                        </div>
                    </div>
                </div>
                <div className="egg-buy">
                    <div className="item">
                        <div className="item-header">
                            <div className="icon"></div>
                            <div className="content">
                                <h4>Unopend Eggs</h4>
                                <div className="num">0</div>
                            </div>
                        </div>
                        <div className="item-des">Unlocked Eggs cannot be traded</div>
                        <div className="item-btns">
                            <button class="bg">Unlock Egg</button>
                            <button class="border">Buy Egg</button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <div className="icon"></div>
                            <div className="content">
                                <h4>Unopend Eggs</h4>
                                <div className="num">0</div>
                            </div>
                        </div>
                        <div className="item-des">Unlocked Eggs cannot be traded</div>
                        <div className="item-btns">
                            <button class="bg">Unlock Egg</button>
                        </div>
                    </div>
                </div>
              
            </div>
        );
    }
}

export default Egg;