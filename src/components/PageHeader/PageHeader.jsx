import "./PageHeader.scss";

import React, { Component } from 'react';
import { Link,NavLink, withRouter } from "react-router-dom";
import { Layout, Menu, Modal, Input } from 'antd';
import img from '../../assets/images/logo.png';
import img1 from '../../assets/images/user.png';
const { Header } = Layout;

class PageHeader extends Component {
    state = {
		loginModalVisible: false,
		registerModalVisible: false,
        forgetPwdModalVisible: false
	};

    // 登录相关 ==========================================
    showLoginModal = () => {
        this.setState({loginModalVisible: true})
    };

    closeLoginModal= () => {
        this.setState({loginModalVisible: false})
    };

    execLogin = () => {
        // 执行 登录 请在这里处理
        this.closeLoginModal();
        this.props.history.push('/myaccount');
    };


    // 注册相关 ===========================================
    showRegisterModal = () => {
        this.closeLoginModal();
        this.setState({registerModalVisible: true})
    };

    closeRegisterModal= () => {
        this.setState({registerModalVisible: false})
    };

    execRegister = () => {
        // 执行 注册 请在这里处理
        this.closeRegisterModal();
        this.props.history.push('/myaccount');
    };


    
	// forget password ============================================
	showForgetPwdModal = () => {
        this.closeLoginModal();
		this.setState({forgetPwdModalVisible: true})
	};
	closeForgetPwdModal = () => {
      
		this.setState({forgetPwdModalVisible: false})
	};
	execForgetPwd = () => {
		// 执行修改密码请在这里处理！！
	};


    render() {
        return (
           <div>
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
                            <Menu.Item key="marketpalce">
                                <NavLink className="nav-item" to="/marketplace">MARKETPLACE</NavLink>
                            </Menu.Item>
                            <Menu.Item key="mountain">
                                <NavLink className="nav-item" to="/mountain">MOUNTAIN</NavLink>
                            </Menu.Item>
                            <Menu.Item key="lease">
                                <NavLink className="nav-item" to="/lease">RentToEarn</NavLink>
                            </Menu.Item>
                            <Menu.Item key="game" disabled>
                                <a className="nav-item" href="http://game.dedragon.com">GAME</a>
                            </Menu.Item>
                        </Menu>
                        <div to="/myaccount" className="myaccount" onClick={this.showLoginModal}>
                            <img src={img1}/>
                            SIGN IN
                        </div>
                    </div>
                </Header>

                {/* 登录模态框 */}
                <Modal title="Login" width={916} className="account-modal account-modal-simble account-modal-login" visible={this.state.loginModalVisible} onOk={this.execLogin} onCancel={this.closeLoginModal} maskClosable={false} okText="Confirm">
					<Input type="text" className="login-input" placeholder="Email"/>
					<Input type="password" className="login-input" placeholder="Password"/>
                    <div className="sign-forget">
                        <div className="register" onClick={this.showRegisterModal}>sign up</div>
                        <div className="forget" onClick={this.showForgetPwdModal}>Forget password?</div>
                    </div>
                </Modal>

                {/* 注册模态框 */}
                <Modal title="Sign Up" width={916} className="account-modal account-modal-simble account-modal-register" visible={this.state.registerModalVisible} onOk={this.execRegister} onCancel={this.closeRegisterModal} maskClosable={false} okText="Confirm">
                    <div className="register-title">PlayerId</div>
                    <Input type="text" className="register-input" placeholder="PlayerId"/>
                    
                    <div className="register-title">Email</div>
                    <Input type="text" className="register-input" placeholder="Email"/>

                    <div className="register-title">Verification code</div>
                    <div className="verif-box">
                        <Input type="text" className="verif-input" placeholder="Verification code"/>
                        <div className="verif-btn">Sent</div>
                    </div>
                    
					<Input type="password" className="register-input pwd-input" placeholder="Password"/>
					<Input type="password" className="register-input pwd-input" placeholder="Repeat Password"/>
                 
                </Modal>


                {/* ForgetPwd */}
				<Modal title="Forget Password" width={916} className="account-modal account-modal-simble account-forgetpwd" visible={this.state.forgetPwdModalVisible} onOk={this.execForgetPwd} onCancel={this.closeForgetPwdModal} maskClosable={false} okText="Email Me">
					<div className="des">
						We will email you a link to reset your password.
					</div>
					<Input type="text" value="Collection Wallet address" className="forget-input"/>
                </Modal>

            </div>
        );
    }
}

export default withRouter(PageHeader);