import "./Mining.scss";

import React, { Component } from 'react';

class Mining extends Component {
    render() {
        return (
            <div id="mining">
                <header className="mining-header">
                    <div className="header-item">
                        <h2>Playcoin Pool</h2>
                        <div className="content">
                            <div className="content-left">
                                <span className="icon"></span>
                                Playcoin
                            </div>
                            <div className="content-right">
                                <p>200000 MBOX</p>
                                <p>Daily Distribution </p>
                            </div>
                        </div>
                    </div>
                    <div className="header-item">
                        <h2>Playcoin Pool</h2>
                        <div className="content">
                            <div className="content-left">
                                <span className="icon"></span>
                               
                            </div>
                            <div className="content-right">
                                <p>200000 MBOX</p>
                                <p>Daily Distribution </p>
                            </div>
                        </div>
                    </div>
                    
                </header>

                <div className="mining-animation">Mining Animation</div>
                
                <div className="mining-row">
                    <div className="mining-input"></div>
                    <div className="mining-rate"></div>
                </div>
            </div>
        );
    }
}

export default Mining;