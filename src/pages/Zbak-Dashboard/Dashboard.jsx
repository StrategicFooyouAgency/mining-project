import React, { Component } from 'react';
import "./Dashboard.scss";
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
			 
            <div id="Dashboard">
               <Tabs defaultActiveKey="1">
                    <TabPane tab="Dragon" key="1">
					
                        <div className="dragons">
						
                            <header>
							
                                <div className="header-title">
								
                                    <h2>8,456,987</h2>
                                    <Select defaultValue="All"></Select>
                                </div>
                                <div className="header-select">
                                    <Select defaultValue="Highest ID"></Select>
                                    <Select defaultValue="Filter"></Select>
                                </div>
								
                            </header>
							<div className='cholf'> 
							<div className='chocn'>
							<p className='filter-textlf'>Filter(0)</p>
							<Button  type="text" className='btnlf'>Clear filter</Button>
							<div className='txt-le'>Class</div>
							<div className='txt-le checkbox-le'>
								<Checkbox className='checkbox-le'>Fire</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Land</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Wind</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Water</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Light</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Dark</Checkbox>
							</div>
							<div className='txt-le'>Stage</div>
							<div className='txt-le checkbox-le'>
								<Checkbox className='checkbox-le'>Egg</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Dragon</Checkbox>
							</div>
							<div className='txt-le' >BREED COUNT</div>
							<div style={{width:'176px', margin: '30px'}}>
							<Slider  marks={marks} min={0} max={7} defaultValue={0} />
							</div>
							<div className='txt-le'>Qualit</div>
							<div className='txt-le checkbox-le'>
								<Checkbox className='checkbox-le'>Common</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Rare</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Epic</Checkbox>
								<br />
								<Checkbox className='checkbox-le'>Legend</Checkbox>
							</div>
							</div>
							
							
							<div className='cholist'>
                            <ul className="dragon-list">
							
                                {
                                    this.state.map(item => (
                                        <li><span>{item.content}</span></li>
                                    ))
                                }
                            </ul>
							<div class="page">
								<Pagination simple defaultCurrent={99} total={9999} />
							</div>
							</div>
							</div>
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