import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col,Layout,List,Typography,Card } from 'antd';
import './Activity.css';


const data = [
  'Exchange log......',
  'Exchange log......',
  'Exchange log......',
];

class Activity extends Component {
    render() {
        return (
		<Layout>
					<div className = "seting_outline">
						<h1 className = "seting_h1">Activity</h1>
					
						<div className ="seting_floatlayout_out">
							<div>
								<div className = "seting_background">
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
							</div>
						</div>
					</div>
		</Layout>
            
        );
    }
}

export default Activity;