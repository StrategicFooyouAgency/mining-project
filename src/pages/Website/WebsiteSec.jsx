import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Carousel,Image,Row, Col} from 'antd';
import Webfooter from './Webfooter';
import gameStart from '../../assets/images/gameStart.png';

import banner_1 from '../../assets/images/banner_1.png';
import banner_2 from '../../assets/images/banner_2.png';
import banner_3 from '../../assets/images/banner_3.png';
import banner_4 from '../../assets/images/banner_4.png';
import Twitter from '../../assets/images/Twitter.png';
import Discord from '../../assets/images/Discord.png';
import Telegram from '../../assets/images/Telegram.png';


const { Header, Content, Footer,Icon } = Layout;
let cssName="banner_2";
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

	

class WebsiteSec extends React.Component {
	constructor(props){
	        super(props);
			this.state={date: "banner_2"};
	    }
		
	componentDidMount(){
	         // this.checkScrollHeightAndLoadAnimation();
	         window.addEventListener('scroll', this.handleScroll.bind(this));
	     }
	handleScroll(e) {
	        //定义handleScroll事件函数
	       
	        let wholeScrollHeight = document.documentElement.scrollHeight, // 能够滚动的总高度
	            visiableHeight = document.documentElement.clientHeight, // 可视区域高度
	            currentOffset = document.documentElement.scrollTop; // 滚动的距离
	        if (window.pageYOffset >= wholeScrollHeight*0.05) {
				console.log("Hello Runoob!");
				window.removeEventListener('scroll', this.handleScroll);
				cssName="banner-eff"
				this.setState({
				      date: "banner-eff"
				    });
	        } else {
	        }
	    }	
	     
    render() {
        return (
            // <div style={{fontSize:'100px', textAlign:'center'}}>
            //     WebSite
            // </div>
			<Layout className="layout" style={{backgroundColor:"#FFFFFF"}}>
			<div className="rightlink ">
				<div className='img-mar'>
				<a href="https://twitter.com/DedragonWorld">
					<Image preview={false} 
										src={Twitter}
					/>
				</a>
				</div>
				<div className='img-mar'>
					<a href="https://discord.gg/hE5Z2j8hGe">
					<Image preview={false} 
										src={Discord}
					/>
					</a>
				</div>
				<div className='img-mar'>
					<a href="https://t.me/dedragonworld">
					<Image preview={false} 
										src={Telegram}
					/>
					</a>
				</div>
			</div>
			<div className="">
				<div className="gamebg ">
					<Image preview={false} className=''
										src={banner_1}
					/>
				</div>
				<div className="gamebtn" align="center">
				<a href="http://game.dedragon.com/">
					<Image preview={false} className='game-img'
										src={gameStart}
					/>
					</a>
				</div>	
			</div >
			
			<div className={this.state.date}>
				<div className='banener-image' align="center">
					<Image preview={false} 
							src={banner_2}
					/>
				</div>
			</div>
			<div className='banner_3'>
				<div className='banener-image2' align="center">
					<Image preview={false} 
							src={banner_3}
					/>
				</div>
			</div>
			<div className='banner_3'>
				<div className='banener-image3' align="center">
					<Image preview={false} 
							src={banner_4}
					/>
				</div>
			</div>
			
				<div>
				<Webfooter/>
				</div>
			</Layout>
			
		
        );
    }
}



export default WebsiteSec;