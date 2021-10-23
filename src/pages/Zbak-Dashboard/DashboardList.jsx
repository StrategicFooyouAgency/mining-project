import React, { Component } from 'react';
import "./Dashboard.scss";
import "./DashboardList.scss";
import { Tabs, Select,Pagination,Layout,Button,Checkbox,Slider} from 'antd';
import {Route,Switch,Redirect,Link} from 'react-router-dom';
import Dragon from './Dragon/Dragon';
const { TabPane } = Tabs;
const { Option } = Select;
const {Content,Sider,Header } = Layout;
const marks = {
  0: {
	  style: {
		  fontSize:'20px',
      color: '#FFFFFF',
    },
    label: 0,
  },
  7: {
    style: {
		fontSize:'20px',
      color: '#FFFFFF',
    },
    label: 7,
  },
};

class Dashboard extends Component {
	state = [
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    },
	    {
	        content: 'Dragon Information'
	    }
		];
    render() {
        return (
		<div className="mining-layouta">
		    <div className="container">
		<Layout className=''>
		
			<Content className=''>
			 
            <div id="dashboardList">
               <Tabs defaultActiveKey="1">
                    <TabPane tab="Dragon" key="1">
					
                        <div className="">
						
                            <header>
							<div id="">
							    <header className="mining-header">
							        <div className="header-item">
							            <h2>Playcoin Pool</h2>
							            <div className="content">
							                <div className="content-left">
							                    <span className="icon"></span>
							                    Playcoin
							                </div>
							                <div className="content-right">
							                    <p>200000 MBOX</p>
							                    <p>Daily Distribution </p>
							                </div>
							            </div>
							        </div>
							        <div className="header-item">
							            <h2>Playcoin Pool</h2>
							            <div className="content">
							                <div className="content-left">
							                    <span className="icon"></span>
							                   
							                </div>
							                <div className="content-right">
							                    <p>200000 MBOX</p>
							                    <p>Daily Distribution </p>
							                </div>
							            </div>
							        </div>
							        
							    </header>
							
							    <div className="mining-animation">Mining Animation</div>
							    
							    <div className="mining-row">
							        <div className="mining-input"></div>
							        <div className="mining-rate"></div>
							    </div>
							</div>
                            </header>
							</div>
                    </TabPane>
					
                    <TabPane tab="Items" key="2">
                    </TabPane>
                    <TabPane tab="Food" key="3">
                        This is Food
                    </TabPane>
                </Tabs>
				
			
            
                
				
            </div>
			</Content>
			</Layout>
			</div>
				
			</div>
        );
    }
}

export default Dashboard;