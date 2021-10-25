// 模块
import React, { Component } from 'react'
import { Layout, Menu,  Modal } from 'antd';
import {Route,Switch,Redirect,Link} from 'react-router-dom'

// 样式
import "./Activity.scss";

// 组件
import Frame from './Frame/Frame';
import Staking from './Staking/Staking';
import Activity from './Activity/Activity';
import Chest from './Chest/Chest';
import Rank from './Rank/Rank';

const {Content, Sider } = Layout;

export default class Mining extends Component {
    render() {
        return (
            <div className="mining-layout">
                <div className="container">
                    <Layout>
                        <Sider width="268">
                            <Menu theme="dark" defaultSelectedKeys={['0']}>
                                <Menu.Item key="0">
                                    <Link to="/activity/frame">Frame</Link>
                                </Menu.Item>
                                <Menu.Item key="1">
                                    <Link to="/activity/staking">Staking</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/activity/activity">activity</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/activity/chest">chest</Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/activity/rank">Rank</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path="/activity/frame" component={Frame} />
                                <Route path="/activity/Staking" component={Staking} />
                                <Route path="/activity/activity" component={Activity} />
                                <Route path="/activity/chest" component={Chest} />
                                <Route path="/activity/rank" component={Rank} />
                                <Redirect to="/activity/frame"/>
                            </Switch>

                        </Content>
                    </Layout>
                </div>
            </div>
        )
    }
}
