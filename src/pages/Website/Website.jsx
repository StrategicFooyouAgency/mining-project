import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Carousel,Image,Row, Col} from 'antd';
import Webfooter from './Webfooter';
import img from '../../assets/images/video.png';
import gameStart from './gameStart.png';
import context from '../../assets/images/context_1.png';
import context_1 from '../../assets/images/context_1.png';
import context_2 from '../../assets/images/context_2.png';
import context_3 from '../../assets/images/context_3.png';
import context_4 from '../../assets/images/context_4.png';
import context_5 from '../../assets/images/context_5.png';
import banner_1 from '../../assets/images/banner_1.png';


const { Header, Content, Footer,Icon } = Layout;

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};

function onChange(a, b, c) {
  console.log(a, b, c);
}


class Website extends Component {
    render() {
        return (
            // <div style={{fontSize:'100px', textAlign:'center'}}>
            //     WebSite
            // </div>
			<Layout className="layout" style={{backgroundColor:"#313131"}}>
			<div className="">
				<div className="gamebg">
					<img src={img} className="video-banner"/>
				</div>
				<div className="gamebtn">
				<a href="http://game.dedragon.com/">
					<Image preview={false} className='gameStart'
										src={gameStart}
					/>
					</a>
				</div>
				
			</div>
			<div>
			<Carousel afterChange={onChange} effect="fade">
			    <div>
			      <h3 style={contentStyle}>1</h3>
			    </div>
			    <div>
			      <h3 style={contentStyle}>2</h3>
			    </div>
			    <div>
			      <h3 style={contentStyle}>3</h3>
			    </div>
			    <div>
			      <h3 style={contentStyle}>4</h3>
			    </div>
			  </Carousel>
			  </div>
			  <div>
				<div className="context-leftb" >
							<Image preview={false}
						      src={context}
						    />
							<div className='img-title'>ISLAND
							<div className='img-text'>Build your fortune in your home island</div>
							</div>
							
				</div>
				<div className="context-rightb">
										
										<Image preview={false}
										  src={context_1}
										/>
										<div className='img-title-right'>BREEDING
										<div className='img-text-right'>Thousands of species of dragons waiting for you to breed</div>
										</div>
										
				</div>
			  <div className="context-leftb">
				  <Image preview={false}
				    src={context_2}
				  />
				  <div className='img-title'>EXPLORE AND CONQUER
				  <div className='img-text'>Explore into world and be rewarded for your effort</div>
				  </div>
			  </div>
			  <div className="context-rightb">
					<Image preview={false}
					  src={context_3}
					/>
					<div className='img-title-right'>MIMING TOWN
					<div className='img-text-right'>Resource-rich areas are hubs of economic activity</div>
					</div>
			  </div>
			  <div className="context-leftb">
				  <Image preview={false}
				    src={context_4}
				  />
				  <div className='img-title'>LOOT
				  <div className='img-text'>Mint DeDragon loot and staking other loot</div>
				  </div>
			  </div>
			  <div className="context-rightb context-last">
				  <Image preview={false}
					src={context_5}
				  />
				  <div className='img-title-right'>MARKETPLACE
				  <div className='img-text-right'>Buy and Sell your resources and services on the Dragon world</div>
				  </div>
			  </div>
			</div>
				<div>
				<Webfooter/>
				</div>
			</Layout>
			
		
        );
    }
}



export default Website;