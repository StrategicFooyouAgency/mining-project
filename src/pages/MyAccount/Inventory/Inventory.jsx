import React, { Component } from 'react';
import { Tabs, Select,Pagination} from 'antd';

import "./Inventory.scss";

const { TabPane } = Tabs;
const { Option } = Select;


class Inventory extends Component {

    render() {
       
        return (
            <div id="accountInventory">
               
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Dragon" key="1">
                        <div className="gragon">
                            <div className="gragon-select">
                                <div className="gragon-select-num">
                                    <span>10 Dragon</span>
                                    <Select defaultValue="All" className="">
                                        <Option value="All">All</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </div>
                                <div className="gragon-select-filter">
                                    <Select defaultValue="Highest ID">
                                        <Option value="Highest ID"> Highest ID</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <button className="filter-btn">Filter</button>

                                </div>
                            </div>

                            <div className="dragon-content">
                                <div className="dragon-item">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item clocked">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item clocked">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                            </div>

                            <div className="dragon-page">
                                <Pagination simple defaultCurrent={1} total={1000000} />
                            </div>
                        </div>

                    </TabPane>
                    <TabPane tab="Egg" key="2" disabled>
                        Game II
                    </TabPane>
                </Tabs>               
            </div>
        );
    }
}




export default Inventory;