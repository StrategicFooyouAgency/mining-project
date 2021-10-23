import React, { Component } from 'react';
import { Tabs, Select,Pagination,Layout,Button,Checkbox,Slider,Row, Col,List, Card,Modal,Image} from 'antd';
import {Route,Switch,Redirect,Link} from 'react-router-dom';
import "./Marketpalce.scss";
const { TabPane } = Tabs;
const { Option } = Select;
const {Content,Sider,Header } = Layout;
const { Meta } = Card;
const marks = {
  0: {
	  style: {
		  fontSize:'18px',
      color: '#313131',
    },
    label: 0,
  },
  7: {
    style: {
		fontSize:'18px',
      color: '#313131',
    },
    label: 7,
  },
};
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const paginationProps = {
  simple:true
};
function callback(key) {
  console.log(key);
}
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = 'http://127.0.0.1:8080/plugins/jquery.min.js';
		document.head.appendChild(script);   

class Marketpalce extends React.Component {
	state = {
	    modal1Visible: false,
	    modal2Visible: false,
	  };
	  setModal2Visible(modal2Visible) {
	      this.setState({ modal2Visible });
	    }
    render() {
        return (
		<Layout className='allBackg'>
			<div className='topBackg'>
		<div id='marketpalce' >
			<div >
            <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter='0' className='topBackg'>
                <TabPane tab="Last 24h" key="1">
				  <div className='saleNum'>
					<div className='changeFf'>
						<div className='titleCenter'>
							<div >TOTAL SALE</div>
							<div className='redRound'></div>
							<div className='changeNum'>57,253</div>
						</div>
						<div className='titleCenter'>
							<div >TOTAL VOLUME</div>
							<div className='redRound blueRound'></div>
							<div className='changeNum'>4,902.4</div>
						</div>
						<div className='titleCenter'>
							<div >Dxxx SOLD</div>
							<div className='redRound yellowRound'></div>
							<div className='changeNum'>57,207</div>
						</div>
					  </div>
				  </div>
                </TabPane>
                <TabPane tab="7 days" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="30 days" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
			  
			  <Tabs defaultActiveKey="1" onChange={callback} tabBarGutter='0' >
			      <TabPane tab="Dargon" key="1">
					<div className='cholf'>
					<div className='chocn'>
					<p className='filter-textlf'>Filter(0)</p>
					<Button  type="text" className='btnlf'>Clear filter</Button>
					<div className='txt-le'>CLASS</div>
					<div className='txt-le'>
					<Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
					    <Row>
					      <Col span={12}>
					        <Checkbox value="A" className='checkbox-le'>Fire</Checkbox>
					      </Col>
					      <Col span={12}>
					        <Checkbox value="B" className='checkbox-le'>Land</Checkbox>
					      </Col>
					      <Col span={12}>
					        <Checkbox value="C" className='checkbox-le'>Wind</Checkbox>
					      </Col>
					      <Col span={12}>
					        <Checkbox value="D" className='checkbox-le'>Water</Checkbox>
					      </Col>
					      <Col span={12}>
					        <Checkbox value="E" className='checkbox-le'>Light</Checkbox>
					      </Col>
						  <Col span={12}>
						    <Checkbox value="F" className='checkbox-le'>Dark</Checkbox>
						  </Col>
					    </Row>
					  </Checkbox.Group>
					</div>
					<div className='txt-le'>Stage</div>
					<div className='txt-le checkbox-le'>
						<Checkbox className='checkbox-le'>Egg</Checkbox>
						<br />
						<Checkbox className='checkbox-le'>Dragon</Checkbox>
					</div>
					<div className='txt-le' >BREED COUNT</div>
					<div style={{width:'176px', margin: '40px 30px 60px'}}>
					<Slider  marks={marks} min={0} max={7} defaultValue={0} />
					</div>
					<div className='txt-le '>Qualit</div>
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
						
						<div className='rightDragon'>
						<div >
							<header>
							
							    <div className="header-title">
								
							        <h2>8,456,987</h2>
							        <Select defaultValue="For sale"></Select>
							    </div>
								
							</header>
						</div>
							<List
								grid={{
								  gutter: 16,
								  xs: 4,
								  sm: 2,
								  md: 4,
								  lg: 4,
								  xl: 4,
								  xxl: 4,
								}}
								
								pagination={paginationProps}
								dataSource={data}
								renderItem={item => (
								  <List.Item>
									<Card title={item.title}
									id='drgonCard'
									hoverable='true'
									onClick={() => this.setModal2Visible(true)}
									extra={<CardQualit></CardQualit>}
										cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{height:"199px",width:'207px'}} className='cardCover'/>}
									>
									<div >
										<div className='cardFootLeft'>25987.278</div>
										<div className='cardFootRight'>#15784098</div>
									</div>
									</Card>
								  </List.Item>
								)}
							  />,
							  <Modal
										width={"1027"}
							            centered
							            visible={this.state.modal2Visible}
							            onOk={() => this.setModal2Visible(false)}
							            onCancel={() => this.setModal2Visible(false)}
										footer={null}
							          >
										<ModalCard></ModalCard>
							          </Modal>
					  </div>
					</div>
			      </TabPane>
			      <TabPane tab="Items" key="2">
			        Content of Tab Pane 2
			      </TabPane>
			      <TabPane tab="Food" key="3">
			        Content of Tab Pane 3
			      </TabPane>
			    </Tabs>
				</div>
		</div>	
			</div >
		  </Layout>
        );
    }
}

class CardQualit extends React.Component {
	render(){
		return(
			<div className='qualit'>
				<div className = 'qualitStyle qualitRed'>
				</div>
				<div className = 'qualitStyle qualitGreem'>
				</div>
				<div className = 'qualitStyle qualitBlue'>
				</div>
				<div className = 'qualitStyle qualitYellow'>
				</div>
			</div>
			
		)
	}
}

class ModalCard extends React.Component {
	render(){
		return(
		<div className='modalFlex'>
		    <div className='modalLeft'>
				<div className='modalHashPower'>Hash Power:168</div>
				<div>
					<Image preview={false} className='modalImg'
										src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
					/>
				</div>
				<div className='modalLvStyle'>Lv.{" 10"}</div>
				<div className="modalFootStyle">
					<div className='cardFootLeft'>25987.278</div>
					<div className='cardFootRight'>#15784098</div>
				</div>
				<div className = 'modalBuyBtn'>
					<Button >BUY</Button>
				</div>
			</div>
			<div className='modalRight'>
				<div className=''>
					<div className='modalRightNum'>#0000000000001</div>
					<div className='modalCardQualit'>
						<CardQualit ></CardQualit>
					</div>
				</div>
				<div className='breedCount'>Breed count 7</div>
				<div className='inforMation'>InforMation</div>
				<div className='propStyle'>
					<div className='hpMargin'>
						<div className='hpStyle'>hp</div>
						<div className='hpNum'>99999</div>
					</div>
					<div className='hpMargin'>
						<div className='hpStyle'>hp</div>
						<div className='hpNum'>99999</div>
					</div>
					<div className='hpMargin'>
						<div className='hpStyle'>hp</div>
						<div className='hpNum'>99999</div>
					</div>
					<div className='hpMargin'>
						<div className='hpStyle'>hp</div>
						<div className='hpNum'>99999</div>
					</div>
				</div>
				<div className='attribute'>
					<div className='attributeCon'>
						<div>Attribute</div>
							<div className='attributeFlex'>
								<div className='attributeProp'>Fire</div>
								<div className='attributeProp'>Water</div>
								<div className='attributeProp'>Ground</div>
								<div className='attributePropSec'>Wind</div>
								<div className='attributePropSec'>Light</div>
								<div className='attributePropSec'>Dark</div>
							</div>
						</div>
						<div className='attributeCon attributeConRight'>
								<div>Skill</div>
									<div className='attributeFlex attributeSillFlex'>
										
										<Image preview={false} className='attributeSillImg'
															src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
										/>
										<div className='attributeSillText'>
										GAZE:<br/>
										<p>Annotate the target,reduce defense by 10 points for 3 rounds</p>
										</div>
									</div>
							</div>
						</div>
						<div className = "bodyPartsStyle">
							<div >Body Parts</div>
							<div className='bodyPartsCon'>
								<div className='hormicon'>
									<div className='hormiconText'>hormicon</div>
									<div className='hormiconTextRight'>asd</div>
								</div>
								
								<div className='hormicon'>
									<div className='hormiconText'>hormicon</div>
									<div className='hormiconTextRight'>asd</div>
								</div>
								
								<div className='hormicon'>
									<div className='hormiconText'>hormicon</div>
									<div className='hormiconTextRight'>asd</div>
								</div>
								
								<div className='hormicon'>
									<div className='hormiconText'>hormicon</div>
									<div className='hormiconTextRight'>asd</div>
								</div>
							</div>
						</div>
					</div>
			</div>	
		)
	}
}


export default Marketpalce;