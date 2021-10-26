import React, { Component } from 'react';
import { Tabs, Select,Pagination, Modal, Input} from 'antd';

import "./Inventory.scss";

const { TabPane } = Tabs;
const { Option } = Select;


class Inventory extends Component {

    state = {
		dragonDragonVisible: false,
        upstarModalVisible: false,
        selectModalVisible: false,
        sellModalVisible: false,
        giftModalVisible: false,
        eggModalVisible: false,
        eggSellModalVisible: false

	};


    // 龙详情的弹框  =========================================================
	showDragonModal = () => {
		this.setState({dragonDragonVisible: true})
	};
	closeDragonModal= () => {
		this.setState({dragonDragonVisible: false})
	};

    // UpStar 弹框 -================================================================
    showUpstarModal = () => {
        this.closeDragonModal();
        this.setState({upstarModalVisible: true});
    }
    closeUpstarModal = () => {
        this.setState({upstarModalVisible: false});
    }

    // Select 弹框  ==========================================================
    showSelectModal = () => {
        this.closeUpstarModal();
        this.setState({selectModalVisible: true});
    }
    closeSelectModal = () => {
        this.setState({selectModalVisible: false});
    }

    // Sell 弹框 =======================================================
    showSellModal = () => {
        this.closeDragonModal();
        this.setState({sellModalVisible: true});
    }
    closeSellModal = () => {
        this.setState({sellModalVisible: false});
    }

    // Gift 弹框 =========================================================
	showGiftModal = () => {
        this.closeDragonModal();
        this.setState({giftModalVisible: true});
    }
    closeGiftModal = () => {
        this.setState({giftModalVisible: false});
    }

    // Egg 的详情 ===================================================
    showEggModal = () => {
        this.setState({eggModalVisible: true});
    }
    closeEggModal = () => {
        this.setState({eggModalVisible: false});
    }

    // EggSell 弹框 -===============================================
    showEggSellModal = () => {
        this.closeEggModal();
        this.setState({eggSellModalVisible: true});
    };
    closeEggSellModal = () => {
        this.setState({eggSellModalVisible: false});
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
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item clocked">
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item clocked">
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/dragon.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showDragonModal}>
                                    <img src="/assets/images/dragon.png" alt="" />
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
                                <div className="dragon-item" onClick={this.showEggModal}>
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
                                <div className="dragon-item" onClick={this.showEggModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showEggModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showEggModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showEggModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showEggModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                                <div className="dragon-item" onClick={this.showEggModal}>
                                    <img src="/assets/images/food.png" alt="" />
                                    <div className="clock"></div>
                                </div>
                            </div>

                            <div className="dragon-page">
                                <Pagination simple defaultCurrent={1} total={1000000} />
                            </div>
                        </div>
                    </TabPane>
                </Tabs>         

                {/* 模态框 龙的详细信息 */}
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
                                        <div className="color-box-item">Origin</div>
                                        <div className="color-box-item">DLC 1</div>
                                        <div className="color-box-item">DLC 2</div>
                                        <div className="color-box-item">DLC 3</div>
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
                                            Attribute
                                        </div>

                                        <div className="attr-box">
                                            <div className="attr-box-item">Fire</div>
                                            <div className="attr-box-item">Water</div>
                                            <div className="attr-box-item">Ground</div>
                                            <div className="attr-box-item">Wind</div>
                                            <div className="attr-box-item">Light</div>
                                            <div className="attr-box-item">Dark</div>
                                        </div>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-title">
                                            Skill
                                        </div>
                                        <div className="skill-box">
                                            <div className="skill-image">
                                                <img src="/assets/images/skill.png" alt="skill" />
                                            </div>
                                            <div className="skill-content">
                                                CAZE:<br/>
                                                Annotate the target, 
                                                reduce defense by 
                                                10 points for 3 
                                                rounds.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-parts">
                                    <div className="parts-title">Body Parts</div>
                                    <div className="parts-wrapper">
                                        <div className="parts-box">Horn Icon</div>
                                        <div className="parts-text">——-</div>
                                        <div className="parts-box">Horn Icon</div>
                                        <div className="parts-text">Ordinary<br/> wings</div>
                                        <div className="parts-box">Horn Icon</div>
                                        <div className="parts-text">——-</div>
                                        <div className="parts-box">Horn Icon</div>
                                        <div className="parts-text">Spikes</div>

                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="modal-body-footer">
                        <div className="modal-footer-btn game-btn">To Game</div>
                        <div className="modal-footer-btn sell-btn" onClick={this.showSellModal}>Sell</div>
                        <div className="modal-footer-btn start-btn" onClick={this.showUpstarModal}>Up Star</div>
                        <div className="modal-footer-btn frame-btn">Frame</div>
                        <div className="modal-footer-btn gift-btn" onClick={this.showGiftModal}>Gift</div>
                    </div>
                </Modal>

                {/* Upstar 弹框 */}
                <Modal title="Up Star" width={916} className="account-modal account-modal-mutiple account-modal-upstar" visible={this.state.upstarModalVisible}  onCancel={this.closeUpstarModal} maskClosable={false}>
					<div className="modal-body-body">
                        <div className="upstar-section-one">
                            <div className="section-one-left">
                                <div className="upstar-color">#0000000001</div>
                                <div className="upstar-color-des">Breed count: 4</div>
                                <div className="upstar-fire">Fire</div>
                                <div className="upstar-dark">Dark</div>
                                <div className="upstar-skill">
                                    <span>Skill</span>
                                    <div>
                                        <img src="/assets/images/skill.png" alt="skill" />
                                        <span>CAZE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="section-one-center">
                                <img src="/assets/images/dragon.png" alt="dragon" />
                                <div className="stars">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                </div>
                            </div>
                            <div className="section-one-right">
                                <div className="color-box">
                                    <div className="color-box-item">Origin</div>
                                    <div className="color-box-item">DLC 1</div>
                                    <div className="color-box-item">DLC 2</div>
                                    <div className="color-box-item">DLC 3</div>
                                </div>
                                <div className="parts-wrapper">
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">——-</div>
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">Ordinary<br/> wings</div>
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">——-</div>
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">Spikes</div>

                                </div>
                            </div>
                        </div>
                        <div className="upstar-section-two">
                            <div className="consume-title">Consume</div>
                            <div className="consume-content">
                                <div className="consume-box">
                                    <div className="consume-box-item consume-box-item-a">
                                        <img src="/assets/images/dragon.png" alt="dragon" />
                                        <div className="close"></div>
                                    </div>
                                    <div className="consume-box-item consume-box-item-a">
                                        <img src="/assets/images/dragon.png" alt="dragon" />
                                        <div className="close"></div>
                                    </div>
                                    <div className="consume-box-item consume-box-item-a">
                                        <img src="/assets/images/dragon.png" alt="dragon" />
                                        <div className="close"></div>
                                    </div>
                                    <div className="consume-box-item consume-box-item-a">
                                        <img src="/assets/images/dragon.png" alt="dragon" />
                                        <div className="close"></div>
                                    </div>
                                    <div className="consume-box-item consume-box-item-b-add" onClick={this.showSelectModal}>
                                        <div className="add-btn"></div>
                                    </div>
                                    <div className="consume-box-item consume-box-item-b"></div>
                                    <div className="consume-box-item consume-box-item-b"></div>
                                    <div className="consume-box-item consume-box-item-b-add" onClick={this.showSelectModal}>
                                        <div className="add-btn"></div>
                                    </div>
                                </div>
                                <div className="consume-power">
                                    <div className="stars">
                                        <div className="star"></div>
                                        <div className="star"></div>
                                        <div className="star"></div>
                                    </div>
                                    <div className="power">Hash Power:123456</div>
                                    <div className="power-box">
                                        <div className="power-box-item">HP<br/>99999</div>
                                        <div className="power-box-item">ATX<br/>99999</div>
                                        <div className="power-box-item">SPEED<br/>99999</div>
                                        <div className="power-box-item">SB<br/>99999</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
					<div className="modal-body-footer">
                     
                        <div className="footer-des">Cost Food：250，000</div>
                        <div className="modal-footer-btn star-btn">Up Star</div>
                      
                    </div>
                </Modal>


                {/* Select 弹框 */}
                <Modal title="Select" width={916} className="account-modal account-modal-mutiple account-modal-select" visible={this.state.selectModalVisible}  onCancel={this.closeSelectModal} maskClosable={false}>
                    <div className="modal-body-body">
                        <div className="select-content">
                            {
                                Array(18).fill(100).map(item => {
                                    return (
                                        <div className="select-item">
                                            <img src="/assets/images/dragon.png" alt="dragon" />
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    <div className="modal-body-footer">
                        <div className="modal-footer-btn select-btn">Select</div>
                    </div>
                </Modal>

                {/* Sell 弹框 */}
                <Modal title="Sell" width={916} className="account-modal account-modal-mutiple account-modal-sell" visible={this.state.sellModalVisible}  onCancel={this.closeSellModal} maskClosable={false}>
                    <div className="modal-body-body">
                        <div className="upstar-section-one">
                            <div className="section-one-left">
                                <div className="upstar-color">#0000000001</div>
                                <div className="upstar-color-des">Breed count: 4</div>
                                <div className="power">
                                    Hash Power: 168
                                </div>
                                <div className="fire-dark">
                                    <div className="upstar-fire">Fire</div>
                                    <div className="upstar-dark">Dark</div>
                                </div>
                               
                                <div className="attr-box">
                                    <div className="attr-item">
                                        HP
                                        <br />
                                        9999
                                    </div>
                                    <div className="attr-item">
                                        SB
                                        <br />
                                        9999
                                    </div>
                                    <div className="attr-item">
                                        SPEED
                                        <br />
                                        9999
                                    </div>
                                    <div className="attr-item">
                                        HP
                                        <br />
                                        9999
                                    </div>
                                </div>
                            </div>
                            <div className="section-one-center">
                                <img src="/assets/images/dragon.png" alt="dragon" />
                                <div className="stars">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                </div>
                            </div>
                            <div className="section-one-right">
                                <div className="color-box">
                                    <div className="color-box-item">Origin</div>
                                    <div className="color-box-item">DLC 1</div>
                                    <div className="color-box-item">DLC 2</div>
                                    <div className="color-box-item">DLC 3</div>
                                </div>
                                <div className="parts-wrapper">
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">——-</div>
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">Ordinary<br/> wings</div>
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">——-</div>
                                    <div className="parts-box">Horn Icon</div>
                                    <div className="parts-text">Spikes</div>

                                </div>
                                <div className="upstar-skill">
                                    <span>Skill</span>
                                    <div>
                                        <img src="/assets/images/skill.png" alt="skill" />
                                        <span>CAZE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="upstar-section-two">
                            <div className="input-box">
                                <div className="input-title">Price</div>
                                <input type="text" className="input-price" value="0"/>
                                <div className="input-btn">USDT</div>
                            </div>
                            <div className="price-info">
                                A <span>3.5%</span> fee will be taken from the final sale price.
                            </div>
                        </div>
                    </div>
                    <div className="modal-body-footer">
                        <div className="modal-footer-btn sell-btn">Sell</div>
                    </div>
                </Modal>

                {/* Gift 弹框 */}
                <Modal title="Select" width={916} className="account-modal account-modal-mutiple account-modal-gift" visible={this.state.giftModalVisible}  onCancel={this.closeGiftModal} maskClosable={false}>
                    <div className="modal-body-body">
                        <div className="gift-info">
                        You are about to gift Dragon #3092481 to other person, enter receiver's address to continue:
                        </div>
                        <Input className="gift-input" placeholder="Receiver’s address" />
                    </div>
                    <div className="modal-body-footer">
                        <div className="modal-footer-btn gift-btn">Gift</div>
                        <div className="modal-footer-btn cancel-btn">Cancel</div>
                    </div>
                </Modal>

                {/* Egg 的详情 */}
                <Modal title="Egg" width={916} className="account-modal account-modal-mutiple account-modal-egg" visible={this.state.eggModalVisible}  onCancel={this.closeEggModal} maskClosable={false}>
                    <div className="modal-body-body">
                        <div className="egg-content-a">
                            <div className="egg-info">
                                <img src="/assets/images/dragon.png" alt="egg" />
                                <div className="egg-info-des">
                                    Adult:00：28：47
                                </div>
                            </div>

                            <div className="egg-text">
                                <div className="egg-text-item">Grand<br/>Parent</div>
                                <div className="egg-text-item">Parent</div>
                            </div>

                            <div className="egg-cards">
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                            </div>
                        </div>

                    
                    </div>
                    <div className="modal-body-footer">
                        <div className="modal-footer-btn sell-btn" onClick={this.showEggSellModal}>Sell</div>
                        <div className="modal-footer-btn hatch-btn">Hatch</div>
                        <div className="modal-footer-btn gift-btn">Gift</div>
                    </div>
                </Modal>

                 {/* Egg Sell 的弹框 */}
                 <Modal title="Egg Sell" width={916} className="account-modal account-modal-mutiple account-modal-eggsell" visible={this.state.eggSellModalVisible}  onCancel={this.closeEggSellModal} maskClosable={false}>
                    <div className="modal-body-body">
                        <div className="egg-content-a">
                            <div className="egg-info">
                                <img src="/assets/images/dragon.png" alt="egg" />
                                <div className="egg-info-des">
                                    Adult:00：28：47
                                </div>
                            </div>

                            <div className="egg-text">
                                <div className="egg-text-item">Grand<br/>Parent</div>
                                <div className="egg-text-item">Parent</div>
                            </div>

                            <div className="egg-cards">
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                                <div className="egg-card">
                                    <img src="/assets/images/dragon.png" alt="egg" />
                                </div>
                            </div>
                        </div>
                        <div className="egg-content-b">
                            <div className="input-box">
                                <div className="input-title">Price</div>
                                <input type="text" className="input-price" value="0"/>
                                <div className="input-btn">USDT</div>
                            </div>
                            <div className="price-info">
                                A <span>3.5%</span> fee will be taken from the final sale price.
                            </div>
                        </div>
                    
                    </div>
                    <div className="modal-body-footer">
                        <div className="modal-footer-btn sell-btn">Sell</div>
                        <div className="modal-footer-btn cancel-btn">Cancel</div>
                    </div>
                </Modal>



            </div>
        );
    }
}




export default Inventory;