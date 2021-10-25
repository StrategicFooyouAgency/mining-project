import React, { Component } from 'react';
import { Checkbox,Modal, Input } from 'antd';
import './Settings.scss';

class Settings extends Component {
	state = {
		changeNameModalVisible: false,
		changePwdModalVisible: false,
		forgetPwdModalVisible: false,
		userInfo: {
			playId: 'Play Id'
		}
	};

	// change name----------------------------------
	showChangeNameModal = () => {
		this.setState({changeNameModalVisible: true})
	};

	closeChangeNameModal= () => {
		this.setState({changeNameModalVisible: false})
	};

	execChangeName = () => {
		// 执行修改用户名请在这里处理！！！ 
	};

	setChangeNameInputValue = (event) => {
		this.setState({
			userInfo: {
				playId: event.target.value
			}
		});
	};


	// change password --------------------------------
	showChangePwdModal = () => {
		this.setState({changePwdModalVisible: true})
	};

	closeChangePwdModal= () => {
		this.setState({changePwdModalVisible: false})
	};

	execChangePwd = () => {
		// 执行修改密码请在这里处理！！！ 
	};


	// forget password -----------------------------------
	showForgetPwdModal = () => {
		this.closeChangePwdModal();
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
			<div id="accountSetting">
				<div className="setting-title1">Accoun Settings</div>
				<div className="setting-title2">Accoun Settings</div>
				<div className="setting-form">
					<div className="setting-form-title">Name</div>
					<div className="setting-form-content">
						<div className="setting-form-input">Player ID</div>
						<button onClick={this.showChangeNameModal}>Change Name</button>
					</div>
				</div>
				<div className="setting-form">
					<div className="setting-form-title">Password</div>
					<div className="setting-form-content">
						<div class="setting-form-input setting-form-input-pwd">*********</div>
						<button onClick={this.showChangePwdModal}>Change Passwod</button>
					</div>
				</div>
				<div className="setting-title2 setting-title3">Notification setting</div>
				<div className="setting-checkbox">
					<Checkbox>Send me an email whenever I successfully an<br/> asset.</Checkbox>
				</div>

				 {/* 模态框 */}
                {/* ChangeName */}
                <Modal title="Change Name" width={916} className="account-modal account-modal-simble account-changename" visible={this.state.changeNameModalVisible} onOk={this.execChangeName} onCancel={this.closeChangeNameModal} maskClosable={false} okText="Confirm">
					<Input value={this.state.userInfo.playId} onChange={this.setChangeNameInputValue} className="playid-input"/>
                </Modal>

				{/* ChangePassword */}
				<Modal title="Change Password" width={916} className="account-modal account-modal-simble account-changepwd" visible={this.state.changePwdModalVisible} onOk={this.execChangePwd} onCancel={this.closeChangePwdModal} maskClosable={false} okText="Confirm">
					<Input type="password" className="pwd-input" placeholder="Current Password"/>
					<div className="forget" onClick={this.showForgetPwdModal}>Forget password?</div>
					<Input type="password" className="pwd-input" placeholder="New Password"/>
					<Input type="password" className="pwd-input" placeholder="Repeat Password"/>
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

export default Settings;