// 模块
import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {Route,Switch,Redirect,Link} from 'react-router-dom'

// 样式
import "./Activity.scss";

// 组件
import Frame from './Frame/Frame';
import FrontPage from './FrontPage/FrontPage';
import MyEgg from './MyEgg/MyEgg';
import MyDragon from './MyDragon/MyDragon';
import SubMining from './Mining/Mining';
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
                                    <Link to="/activity/front">Front page</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/activity/egg">My Egg</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/activity/dragon">My Dragon</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/activity/mining">Mining</Link>
                                    <span></span>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/activity/rank">Rank</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path="/activity/frame" component={Frame} />
                                <Route path="/activity/front" component={FrontPage} />
                                <Route path="/activity/egg" component={MyEgg} />
                                <Route path="/activity/dragon" component={MyDragon} />
                                <Route path="/activity/mining" component={SubMining} />
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
