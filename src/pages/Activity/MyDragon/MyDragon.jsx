import "./MyDragon.scss";

import React, { Component } from 'react';
import { Tabs, Select} from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;

class MyDragon extends Component {
    state = [
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        },
        {
            content: 'Dragon Information'
        }
    ];

    render() {
       
        return (
            <div id="MyDragon">
               
               <Tabs defaultActiveKey="1">
                    <TabPane tab="Dragon" key="1">

                        <div className="dragons">
                            <header>
                                <div className="header-title">
                                    <h2>7 Dragon</h2>
                                    <Select defaultValue="All"></Select>
                                </div>
                                <div className="header-select">
                                    <Select defaultValue="Highest ID"></Select>
                                    <Select defaultValue="Filter"></Select>
                                </div>
                            </header>
                            <ul className="dragon-list">
                                {
                                    this.state.map(item => (
                                        <li><span>{item.content}</span></li>
                                    ))
                                }
                            </ul>
                            <div class="page">
                                <div className="page-btn prev-page-btn"></div>
                                <div className="current">99</div>
                                <div className="total-page">/9999</div>
                                <div className="page-btn next-page-btn"></div>
                            </div>
                        </div>

                    </TabPane>
                    <TabPane tab="Items" key="2">
                        This is Items
                    </TabPane>
                    <TabPane tab="Food" key="3">
                        This is Food
                    </TabPane>
                </Tabs>

               
                    
               
            </div>
        );
    }
}




export default MyDragon;