import React, { Component } from 'react';
import { Layout, Menu, Modal, Input } from 'antd';
import {Route,Switch,Redirect,NavLink} from 'react-router-dom';
import Account from './Account/Account';
import Settings from './Settings/Settings';
import Activity from './Activity/Activity';
import Inventory from './Inventory/Inventory';

import './MyAccount.scss';


const {Content, Sider } = Layout;


class MyAccount extends Component {
    state = {
		rentModalVisible: false,
	};


	showRentModal = () => {
		this.setState({rentModalVisible: true})
	};

	closeRentModal= () => {
		this.setState({rentModalVisible: false})
	};

	execRent = () => {
		// 执行 Lend 请在这里处理
	};


    render() {
        return (
            <div>
                <Layout id="myAccount">
                    <div className="container">
                        <Sider className="sider" width="387">
                            <div>
                                <div className="player-info">
                                    <div>
                                        <div className="player-id">Player ID</div>
                                        <div className="player-mail">player@Email.com</div>
                                        <div className="player-btn">ShowQR</div>
                                    </div>
                                </div>
                                <Menu class="sider-menu" defaultSelectedKeys={['Account']}>
                                    <Menu.Item key="Account">
                                        <NavLink to="/myaccount/account">Account</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="Activity">
                                        <NavLink to="/myaccount/activity">Activity</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="Settings">
                                        <NavLink to="/myaccount/settings">Settings</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="Inventory">
                                        <NavLink to="/myaccount/inventory">Inventory</NavLink>
                                    </Menu.Item>
                                </Menu>
                            </div>

                            <div className="rent-account" onClick={this.showRentModal}>
                                Rent Account
                            </div>
                        </Sider>
                        <Content class="content">
                            <Switch>
                                <Route path="/myaccount/account" component={Account} />
                                <Route path="/myaccount/settings" component={Settings} />
                                <Route path="/myaccount/activity" component={Activity} />
                                <Route path="/myaccount/inventory" component={Inventory} />
                                <Redirect to="/myaccount/account"/>
                            </Switch>
                        </Content>
                    </div>
                </Layout>

                {/* 模态框 */}
                {/* 租赁 */}
                <Modal title="Rent" width={916} className="account-modal account-modal-simble account-modal-rent" visible={this.state.rentModalVisible} onOk={this.execRent} onCancel={this.closeRentModal} maskClosable={false} okText="Lend" cancelText="Cancel">
					<div className="play-info">
                        <div className="player-info">
                            <div>
                                <div className="player-id">Player ID</div>
                                <div className="player-mail">player@Email.com</div>
                                <div className="player-btn">ShowQR</div>
                            </div>
                        </div>
                        <div className="fee-time">
                            <div className="fee-item">
                                <span class="fee-item-item">Fee</span>
                                <Input value="30%" className="fee-input"/>
                            </div>
                            <div className="fee-item">
                                <span class="fee-item-item">Time</span>
                                <Input value="3" className="fee-input"/>
                                <span>Month</span>
                            </div>
                        </div>

                    </div>
                    <div className="pwd-form">
                        <div className="forget">Tenant password</div>
                        <Input type="password" placeholder="New Passowrd" className="forget-input"/>
                        <Input placeholder="Repeat Password" className="forget-input"/>

                    </div>
                </Modal>

              
                
            </div>
        );
    }
}

export default MyAccount;