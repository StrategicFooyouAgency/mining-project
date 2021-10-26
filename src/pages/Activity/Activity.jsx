// 模块
import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Route, Switch, Redirect, Link } from 'react-router-dom'

// 样式
import "./Activity.scss";

// 组件
import Frame from './Frame'
import Staking from './Staking';
import Activity from './Activity/Activity';
import Chest from './Chest/Chest';
import Rank from './Rank';

const { Content, Sider } = Layout;

export default class Mining extends Component {
    state = {
        activeIndex:'0'
    }

    componentDidUpdate(){
        // if()
    }

    render() {
        return (
            <div id="myActivity">
                <div className="mining-layout">
                    <div className="container">
                        <Layout>
                            <Sider className='sider'width="376">
                                <Menu theme="dark" defaultSelectedKeys={['0']} onClick = {(value) => {
                                    this.setState({
                                        activeIndex:value.key
                                    })
                                }}>
                                    <Menu.Item key="0">
                                        <Link to="/activity/frame">
                                            Frame
                                            </Link>
                                            {this.state.activeIndex === '0' && <img className={'router-img'} src={require('../../assets/images/activity/route-backimg.png').default} alt="" />}

                                    </Menu.Item>
                                    <Menu.Item key="1">
                                        <Link to="/activity/staking">Staking</Link>
                                        {this.state.activeIndex === '1' && <img className={'router-img'} src={require('../../assets/images/activity/route-backimg.png').default} alt="" />}

                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/activity/activity">Activity</Link>
                                        {this.state.activeIndex === '2' && <img className={'router-img'} src={require('../../assets/images/activity/route-backimg.png').default} alt="" />}

                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to="/activity/chest">Chest</Link>
                                        {this.state.activeIndex === '3' && <img className={'router-img'} src={require('../../assets/images/activity/route-backimg.png').default} alt="" />}

                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to="/activity/rank">Rank</Link>
                                        {this.state.activeIndex === '4' && <img className={'router-img'} src={require('../../assets/images/activity/route-backimg.png').default} alt="" />}

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
                                    <Redirect to="/activity/frame" />
                                </Switch>

                            </Content>
                        </Layout>
                    </div>
                </div>
            </div>

        )
    }
}
