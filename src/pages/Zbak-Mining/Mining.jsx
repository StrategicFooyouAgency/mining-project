// 模块
import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {Route,Switch,Redirect,Link} from 'react-router-dom'

// 样式
import "./Mining.scss";

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
                                    <Link to="/mining/frame">Frame</Link>
                                </Menu.Item>
                                <Menu.Item key="1">
                                    <Link to="/mining/front">Front page</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/mining/egg">My Egg</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/mining/dragon">My Dragon</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/mining/mining">Mining</Link>
                                    <span></span>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/mining/rank">Rank</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path="/mining/frame" component={Frame} />
                                <Route path="/mining/front" component={FrontPage} />
                                <Route path="/mining/egg" component={MyEgg} />
                                <Route path="/mining/dragon" component={MyDragon} />
                                <Route path="/mining/mining" component={SubMining} />
                                <Route path="/mining/rank" component={Rank} />
                                <Redirect to="/mining/frame"/>
                            </Switch>

                        </Content>
                    </Layout>
                </div>
            </div>
             
        )
    }
}
