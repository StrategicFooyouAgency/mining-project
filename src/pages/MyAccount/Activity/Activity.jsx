import React, { Component } from 'react';
import { List,Typography } from 'antd';
import './Activity.scss';



class Activity extends Component {
    render() {
        return (
			<div id="accountActivity">
				<div className = "seting_outline">
					<div className = "seting_h1">
						<h1>Activities</h1>
						<a href="#">View full activities &gt; </a>
					</div>
				
					<div className="acctount-activity">
						<dl className="acctount-acivity--item">
							<dt>mm/dd/yyyy</dt>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
						</dl>
						<dl className="acctount-acivity--item">
							<dt>mm/dd/yyyy</dt>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
						</dl>
						<dl className="acctount-acivity--item">
							<dt>mm/dd/yyyy</dt>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
						</dl>
						<dl className="acctount-acivity--item">
							<dt>mm/dd/yyyy</dt>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
						</dl>
						<dl className="acctount-acivity--item">
							<dt>mm/dd/yyyy</dt>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
							<dd>
								<span className="time">time</span>
								<span className="log">Exchange log ……</span>
							</dd>
						</dl>
					</div>
				</div>
			</div>
            
        );
    }
}

export default Activity;
