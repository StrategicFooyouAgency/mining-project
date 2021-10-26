import "./Rank.scss";

import React, { Component } from 'react';
import { Tabs, List, Avatar } from 'antd';
// import ComboParts from '../../../components/ComboParts';
const { TabPane } = Tabs;





class Rank extends Component {
    state = [
        {
          title: 'Leadderboard',
          address: '0xc8...0495',
          total: 1029813
        },
        {
            title: 'Leadderboard',
            address: '0xc8...0495',
            total: 1029813
        },
        {
            title: 'Leadderboard',
            address: '0xc8...0495',
            total: 1029813
        },
        {
            title: 'Leadderboard',
            address: '0xc8...0495',
            total: 1029813
        },
    ];
      

    render() {
        return (
            <div id="rank">
               <Tabs defaultActiveKey="1">
                    <TabPane tab="Dragon" key="1">
                        <ul className="tokens">
                            {
                                this.state.map((item,index) => (
                                    <li>
                                        <div className="icon">{index+1}</div>
                                        <div className="content">
                                            <div className="title">{item.title}</div>
                                            <div className="address">{item.address}</div>
                                        </div>
                                        <div className="total">
                                            <div>
                                                <h3>Total Hash Power</h3>
                                                <div class="detail">{item.total}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        <div class="page">
                            <div className="page-btn prev-page-btn"></div>
                            <div className="current">99</div>
                            <div className="total-page">/9999</div>
                            <div className="page-btn next-page-btn"></div>
                        </div>
                    </TabPane>
                    <TabPane tab="Items" key="2">
                    {/* <ComboParts width={256} height={256} parts={['Arm/Black_Arm','Body/Black_Body','Full/BlackDargon',
        'Head/Black_Head','Leg/Black_Leg','Wing/Black_Wing']} anim= "Idle"/> */}
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Rank;