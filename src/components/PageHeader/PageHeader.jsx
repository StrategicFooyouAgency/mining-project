import "./PageHeader.scss";

import React, { Component } from 'react';
import { Link,NavLink } from "react-router-dom";
import { Layout, Menu } from 'antd';
import img from '../../assets/images/logo.png';
import img1 from '../../assets/images/user.png';
const { Header } = Layout;

class PageHeader extends Component {
    render() {
        return (
            <Header class="page-header">
                <div className="header-container">
                    <div className="logo"><img src={img}/></div>
                    <Menu className="header-nav" theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                        <Menu.Item key="home" >
                            <NavLink className="nav-item" to="/" exact="true">HOME</NavLink>
                        </Menu.Item>
                        <Menu.Item key="activity">
                            <NavLink className="nav-item" to="/activity">STAKING</NavLink>
                        </Menu.Item>
                        <Menu.Item key="marketpalce" disabled>
                            <NavLink className="nav-item" to="/marketplace">MARKETPLACE</NavLink>
                        </Menu.Item>
                        <Menu.Item key="mountain">
                            <NavLink className="nav-item" to="/mountain">MOUNTAIN</NavLink>
                        </Menu.Item>
                        <Menu.Item key="lease" disabled>
                            <NavLink className="nav-item" to="/lease">RentToEarn</NavLink>
                        </Menu.Item>
                        <Menu.Item key="game" disabled>
                            <a className="nav-item" href="http://game.dedragon.com">GAME</a>
                        </Menu.Item>
                    </Menu>
                    <NavLink to="/myaccount" className="myaccount" >
                        <img src={img1}/>
                        SIGN IN
                    </NavLink>
                </div>
            </Header>
        );
    }
}

export default PageHeader;