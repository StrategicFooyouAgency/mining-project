import React, { Component } from 'react';
import { Tabs, Select,Pagination, Modal, Input} from 'antd';

import "./Inventory.scss";

const { TabPane } = Tabs;
const { Option } = Select;


class Inventory extends Component {

    state = {
		dragonDragonVisible: true,
	};


    // 龙的弹框
	showDragonModal = () => {
		this.setState({dragonDragonVisible: true})
	};

	closeDragonModal= () => {
		this.setState({dragonDragonVisible: false})
	};

	

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
                                <div className="dragon-item" onClick={this.showDragonModal}>
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
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                            </div>

                            <div className="dragon-page">
                                <Pagination simple defaultCurrent={1} total={1000000} />
                            </div>
                        </div>

                    </TabPane>
                    <TabPane tab="Egg" key="2">
                        <div className="gragon">
                            <div className="gragon-select">
                                <div className="gragon-select-num">
                                    <span>10 Egg</span>
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
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item clocked">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item clocked">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item">
                                    <img src="/assets/images/food2.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                            </div>

                            <div className="dragon-page">
                                <Pagination simple defaultCurrent={1} total={1000000} />
                            </div>
                        </div>
                    </TabPane>
                </Tabs>         

                {/* 模态框 dragon */}
                <Modal title="Gragon" width={916} className="account-modal account-modal-mutiple account-modal-gragon" visible={this.state.dragonDragonVisible}  onCancel={this.closeDragonModal} maskClosable={false}>
					<div className="modal-body-body">
                        <div className="content-a">
                            <div className="content-a-left">
                                <div className="power">
                                Hash Power：168
                                </div>
                                <div className="image">
                                    <img src="/assets/images/dragon.png" alt="dragon" />
                                </div>
                                <div className="level">LV 10</div>
                                <div className="stars">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                </div>
                            </div>
                            <div className="content-a-right">
                                <div className="color-box">
                                    <div className="color-box-left">
                                        <div className="color-name">#0000000001</div>
                                        <div className="color-count">Breed count: 7</div>
                                    </div>
                                    <div className="color-box-right">
                                        <div className="color-box"></div>
                                        <div className="color-box"></div>
                                        <div className="color-box"></div>
                                        <div className="color-box"></div>
                                    </div>
                                </div>
                                <div className="information">
                                    <div className="title">Information</div>
                                    <div className="information-box">
                                        <div className="information-box-item">
                                            <div className="information-box-item-title">HP</div>
                                            <div className="information-box-item-content">99999 9999</div>
                                        </div>
                                        <div className="information-box-item">
                                            <div className="information-box-item-title">ATK</div>
                                            <div className="information-box-item-content">999</div>
                                        </div>
                                        <div className="information-box-item">
                                            <div className="information-box-item-title">DEF</div>
                                            <div className="information-box-item-content">9999</div>
                                        </div>
                                        <div className="information-box-item">
                                            <div className="information-box-item-title">SPEED</div>
                                            <div className="information-box-item-content">999</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="attr-skill">
                                    <div className="attr">
                                        <div className="attr-title">
                                            
                                        </div>
                                    </div>
                                    <div className="skill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="modal-body-footer">

                    </div>
                </Modal>
            </div>
        );
    }
}




export default Inventory;