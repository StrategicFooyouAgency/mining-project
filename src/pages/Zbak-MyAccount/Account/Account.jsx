import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col,Layout,List,Typography,Card } from 'antd';
import './Account.css';
import { EventEmitter } from 'events';





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
		  alert('看起来您需要一个 Dapp 浏览器才能开始使用。')
		  alert('请安装 MetaMask！')
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
		<Layout>
		<Row>
		      <Col span={8} offset={1}>
				<div >
				<div className="assets-line"></div>
				<div className="assets-text">Assets</div>
				</div>
				<div style={{backgroundColor:"#FFFFFF",width:'37.5rem',height:'18.75rem',clear: 'left'}}>
				<span className="eth-num eth-num-pos">156.166</span>
				<span className="eth-num eth-pos">ETH</span>
				<button type="button" className='btn' onClick={(e) => this.emmitEvent()}>Deposit to Meta Mask</button>
				<button type="button" className='btnDe'>Withdraw from</button>
				<div className='address-pos'>Address:{this.state.accounts}</div>
				</div>
			  </Col>
			  <Col offset={7} >
						<div style={{backgroundColor:"#FFFFFF",width:'15.625rem',height:'5rem'}} className="dragos-pos">
			  				<div className='dragos-text'>Dragos</div>
							<div className='dragos-num'>126</div>
						</div>	
						
						<div style={{backgroundColor:"#FFFFFF",width:'15.625rem',height:'5rem'}} className="items-pos">
							<div className='dragos-text'>Items</div>
							<div className='items-num'>56</div>
						</div>
						
						<div style={{backgroundColor:"#FFFFFF",width:'15.625rem',height:'5rem'}} className="items-pos">
							<div className='dragos-text'>Food</div>
							<div className='food-num'>84</div>
						</div>		
			  </Col>
		    </Row>
			<Row className='row-offset'>
				<Col span={8} offset={1}>
					<div style={{width:"31.25rem"}}>
						<div className="assets-line"></div>
						<div className="assets-text">Activites</div>
						<a href="url" className='act-test'>View full activities ></a>
					</div>
					<div style={{backgroundColor:"#FFFFFF",width:'61.4375rem',height:'30.3125rem',clear: 'left'}}>
						<div className='log-list'>
						<List
							header={<div>mm/dd/yyyy</div>}
						      bordered
						      dataSource={data}
						      renderItem={item => (
						        <List.Item>
						          <Typography.Text >time　　　</Typography.Text> {item}
						        </List.Item>
						      )}
						    />
						</div>
						<div className='log-list'>
						<List
							header={<div>mm/dd/yyyy</div>}
						      bordered
						      dataSource={data}
						      renderItem={item => (
						        <List.Item>
						          <Typography.Text >time　　　</Typography.Text> {item}
						        </List.Item>
						      )}
						    />
						</div>
					</div>
				</Col>
			</Row>
			
		</Layout>
            
        );
    }
}

export default Account;