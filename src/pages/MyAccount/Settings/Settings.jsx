import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './Settings.scss';

class Settings extends Component {
    render() {
        return (
			<div id="accountSetting">
				<div className="setting-title1">Accoun Settings</div>
				<div className="setting-title2">Accoun Settings</div>
				<div className="setting-form">
					<div className="setting-form-title">Name</div>
					<div className="setting-form-content">
						<div className="setting-form-input">Player ID</div>
						<button>Change Name</button>
					</div>
				</div>
				<div className="setting-form">
					<div className="setting-form-title">Password</div>
					<div className="setting-form-content">
						<div class="setting-form-input setting-form-input-pwd">*********</div>
						<button>Change Passwod</button>
					</div>
				</div>
				<div className="setting-title2 setting-title3">Notification setting</div>
				<div className="setting-checkbox">
					<Checkbox>Send me an email whenever I successfully an<br/> asset.</Checkbox>
				</div>
			</div>
        );
    }
}

export default Settings;