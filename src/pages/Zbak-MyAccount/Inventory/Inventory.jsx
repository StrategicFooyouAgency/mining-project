import "./Inventory.scss";

import React, { Component } from 'react';
import { Tabs, Select,Pagination} from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;

class Inventory extends Component {
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
            <div id="Inventory">
               
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
                        </div>

                    </TabPane>
                    <TabPane tab="Items" key="2">
                        This is Items
                    </TabPane>
                    <TabPane tab="Food" key="3">
                        This is Food
                    </TabPane>
                </Tabs>

                <div class="page">
					<Pagination simple defaultCurrent={99} total={9999} />
                </div>
                    
               
            </div>
        );
    }
}




export default Inventory;