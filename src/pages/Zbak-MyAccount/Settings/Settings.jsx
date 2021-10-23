import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col,Layout,List,Typography,Card } from 'antd';
import './Settings.css';


const data = [
];

class Settings extends Component {
    render() {
        return (
		<div className = "seting_outline">
			<h1 className = "seting_h1">Accoun Settings</h1>

			<div className ="seting_floatlayout_out">
				<div>
					<div className = "seting_background">
					
					<h1 className = "seting_h2">General Setting</h1>

					<br/>

					<div className="seting_background_low">
						
						<label className = "setting_input_title">Name</label> <br/>
						<input type='text' id='username' defaultValue='Player ID' className = "setting_input" />
						<input type='text' id='changename' defaultValue='Change name' readonly="readonly" className = "setting_button " /> <br/><br/>

						<label className = "setting_input_title">Name</label> <br/>
						<input type='password' id='username' defaultValue='Player ID' className = "setting_input" />
						<input type='text' id='changename' defaultValue='Change password' readonly="readonly" className = "setting_button " /> <br/><br/>


						<br/>
						<h1 className = "seting_h2">Notification Setting</h1>
						<br/>
						<input name="Fruit" type="checkbox" value="" className="seting_checkbox"  />
						<label className = "seting_h3">Send me an email wherever I successfuily an asset.</label>
					
					</div>




					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default Settings;