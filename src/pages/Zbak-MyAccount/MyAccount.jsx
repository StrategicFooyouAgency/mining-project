import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {Route,Switch,Redirect,Link} from 'react-router-dom'
import Account from './Account/Account';
import Settings from './Settings/Settings';
import Activity from './Activity/Activity';
import Inventory from './Inventory/Inventory';

import './MyAccount.css';


const {Content, Sider } = Layout;


class MyAccount extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh',padding: '0px 211px'}}>
                <Sider width={268}>
                <div className="logo" />
				<div className="player-info">
					<div>
						<div className = "playerID">Player ID</div>
						<div className = "playerMail">player@Email.com</div>
						<div className = "playerQR playerMail">ShowQR</div>
					</div>
				</div>
                    <Menu theme="light" defaultSelectedKeys={['Account']} mode="inline">
                        <Menu.Item key="Account">
                            <Link to="/myaccount/account">Account</Link>
                        </Menu.Item>
                        <Menu.Item key="Inventory">
                            <Link to="/myaccount/inventory">Inventory</Link>
                        </Menu.Item>
                        <Menu.Item key="Activity">
                            <Link to="/myaccount/activity">Activity</Link>
                        </Menu.Item>
                        <Menu.Item key="Settings">
                            <Link to="/myaccount/settings">Settings</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{padding:"20px"}}>
            
                    <Switch>
                        <Route path="/myaccount/account" component={Account} />
                        <Route path="/myaccount/settings" component={Settings} />
						<Route path="/myaccount/activity" component={Activity} />
						<Route path="/myaccount/inventory" component={Inventory} />
						<Redirect to="/myaccount/account"/>
                    </Switch>
            
                </Content>
	
	
               
            </Layout>
			
        );
    }
}

export default MyAccount;