import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {Route,Switch,Redirect,NavLink} from 'react-router-dom';
import Account from './Account/Account';
import Settings from './Settings/Settings';
import Activity from './Activity/Activity';
import Inventory from './Inventory/Inventory';

import './MyAccount.scss';


const {Content, Sider } = Layout;


class MyAccount extends Component {
    render() {
        return (
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

                        <div className="rent-account">
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
        );
    }
}

export default MyAccount;