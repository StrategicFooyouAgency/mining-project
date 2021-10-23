// 模块
import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { Route, Switch, Redirect, Link } from 'react-router-dom'

// 样式
import "./index.scss";

// 组件
import Fram from './Fram/index.jsx';
import Activity from './Activity/index.jsx';
import Chest from './Chest/index.jsx';
import Rank from './Rank/index.jsx';

const { Content, Sider } = Layout;

const Mountain = (props) => {
    return (
        <div className="mountain">
            <Layout>
                <Sider width='387'>
                    <Menu defaultSelectedKeys={['0']}>
                        <Menu.Item key="0">
                            <Link to="/mountain/fram">
                                <span className='menu-icon'></span>
                                <span className='menu-label'>
                                    Fram
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Link to="/mountain/activity">
                                <span className='menu-icon'></span>
                                <span className='menu-label'>
                                    Activity
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/mountain/chest">
                                <span className='menu-icon'></span>
                                <span className='menu-label'>
                                    Chest
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/mountain/rank">
                                <span className='menu-icon'></span>
                                <span className='menu-label'>
                                    Rank
                                </span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Switch>
                        <Route path="/mountain/frame" component={Fram} />
                        <Route path="/mountain/activity" component={Activity} />
                        <Route path="/mountain/chest" component={Chest} />
                        <Route path="/mountain/rank" component={Rank} />
                        <Redirect to="/mountain/frame" />
                    </Switch>
                </Content>
            </Layout>
        </div>
    );
}

export default Mountain;