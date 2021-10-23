import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { EventEmitter } from 'events';
import './Account.scss';

const { TabPane } = Tabs;





const eventBus = new EventEmitter();
const data = [
  'Exchange log......',
  'Exchange log......',
  'Exchange log......',
];
class Account extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			accounts:"",
		};
		var web3Provider;
		var web3js;
		}
		componentDidMount() {
			eventBus.addListener('sayHello', this.handleSayHelloListener);
		}
		componentWillUnmount() {
		    eventBus.removeListener('sayHello', this.handleSayHelloListener);
		}
		  
		handleSayHelloListener(...args) {
		    console.log(...args);
		}
		emmitEvent() {
			eventBus.emit('sayHello', 'hello home', 123);
		}
		render() {
			
			if (typeof window.ethereum == 'undefined') {
				// alert('看起来您需要一个 Dapp 浏览器才能开始使用。')
				// alert('请安装 MetaMask！')
			}else{
				var that = this;
				window.ethereum.request({ method: 'eth_requestAccounts' }).catch(function (reason) {
						//alert('哦！NO, 好像发生了点意外。别着急, 我们很快修复它');
				}).then(function (accounts) {
					//global.constants.accounts = accounts[0];
					// console.log(accounts)
					if(accounts != undefined){
						window.tools.setStore("accounts",accounts[0])
						// console.log('account',window.tools.getStore("accounts"))
						that.setState({
							accounts: window.tools.getStore("accounts")
						});
					}
					
				});
			}
			return (
				<div id="myAcctountAccount">
					<div className="assets">
						<div className="assets-title">
							Assets
						</div>
						<div className="assets-content">
							<div className="assets-content-inner">
								<div className="assets-content-inner-item">
									<div className="assets-content-inner-a">156.166 CST</div>
									<div className="assets-content-inner-b">2156.154 USDT</div>
									<div className="assets-content-inner-btn1">Deposit to Meta Mask</div>
									<div className="assets-content-inner-btn2">Withdraw from </div>
									<div className="assets-content-inner-address">Address: 0x01664...7486</div>
								</div>
								<div className="assets-content-inner-item">
									<table className="assets-content-inner-table">
										<tr>
											<td>759,332.187</td>
											<td>Ruby</td>
										</tr>
										<tr>
											<td>332.187</td>
											<td>Topaz</td>
										</tr>
										<tr>
											<td>332.187</td>
											<td>Topaz</td>
										</tr>
										<tr>
											<td>332.187</td>
											<td>Topaz</td>
										</tr>
									</table>
								
								</div>
							</div>
						</div>
					</div>
					
					<div className="dragon">
						<Tabs defaultActiveKey="1">
							<TabPane tab="DeFi Dragon" key="1" class="defi-dragon">
								<div className="dragon-content">
									<div className="dragon-item">
										<div className="dragon-item-img">
											<img src="/assets/images/food.png" alt="" />
										</div>
										<div className="dragon-item-content">
											<div>Dragons</div>
											<div>126</div>
										</div>
									</div>
									<div className="dragon-item">
										<div className="dragon-item-img">
											<img src="/assets/images/food.png" alt="" />
										</div>
										<div className="dragon-item-content">
											<div>Dragons</div>
											<div>126</div>
										</div>
									</div>
									<div className="dragon-item">
										<div className="dragon-item-img">
											<img src="/assets/images/food.png" alt="" />
										</div>
										<div className="dragon-item-content">
											<div>Dragons</div>
											<div>126</div>
										</div>
									</div>
									<div className="dragon-item">
										<div className="dragon-item-img">
											<img src="/assets/images/food.png" alt="" />
										</div>
										<div className="dragon-item-content">
											<div>Dragons</div>
											<div>126</div>
										</div>
									</div>
									<div className="dragon-item">
										<div className="dragon-item-img">
											<img src="/assets/images/food.png" alt="" />
										</div>
										<div className="dragon-item-content">
											<div>Dragons</div>
											<div>126</div>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tab="Game II " key="2">
								Game II
							</TabPane>
							<TabPane tab="Game III" key="3">
								Game III								
							</TabPane>
						</Tabs>
					</div>
				</div>
				
			);
    }
}

export default Account;