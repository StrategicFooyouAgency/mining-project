import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout,Carousel,Image} from 'antd';
import './Website.css';
// import Webfooter from './Webfooter';
// import gameStart from '../../assets/images/gameStart.png';

import banner_1 from '../../assets/images/banner1.png';
import banner_2 from '../../assets/images/banner2.png';
import banner_3 from '../../assets/images/banner3.png';
import banner_4 from '../../assets/images/banner4.png';
import banner_5 from '../../assets/images/banner5.png';
import banner_6 from '../../assets/images/banner6.png';
import banner_7 from '../../assets/images/banner7.png';
import banner_8 from '../../assets/images/banner8.png';
import banner_9 from '../../assets/images/banner9.png';
import banner_10 from '../../assets/images/banner10.png';
import banner_11 from '../../assets/images/banner11.png';
import banner_12 from '../../assets/images/banner12.png';
import banner_13 from '../../assets/images/banner13.png';
import banner_14 from '../../assets/images/banner14.png';
import banner_15 from '../../assets/images/banner15.png';
import banner_16 from '../../assets/images/banner16.png';
import banner_17 from '../../assets/images/banner17.png';
import banner_19 from '../../assets/images/banner19.png';
import banner_18 from '../../assets/images/banner_18.png';
import banner_20 from '../../assets/images/banner20.png';
import banner_21 from '../../assets/images/banner21.png';
import banner_22 from '../../assets/images/banner22.png';
import Twitter from '../../assets/images/Twitter.png';
import Discord from '../../assets/images/Discord.png';
import Telegram from '../../assets/images/Telegram.png';
import SignUp from '../../assets/images/SignUp.png';
import preArrow from '../../assets/images/preArrow.png';
import nextArrow from '../../assets/images/nextArrow.png';
import playToEarn from '../../assets/images/playToEarn.png';
import whitepaper from '../../assets/images/whitepaper.png';


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

	

class Website3rd extends React.Component {
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
			<Layout className="layout " style={{backgroundColor:"#26154D"}}>
			<div className="rightlink ">
				<div className='img-mar'>
				<a href="https://twitter.com/DedragonWorld">
					<Image preview={false} 
										src={Twitter}
					/>
				</a>
				</div>
				<div className='img-mar'>
					<a href="https://discord.gg/GPnye5PB">
					<Image preview={false} 
										src={Discord}
					/>
					</a>
				</div>
				<div className='img-mar'>
					<a href="http://t.me/dedragon_cryptosteam">
					<Image preview={false} 
										src={Telegram}
					/>
					</a>
				</div>
			</div>
			<div className="gameEnterBanner">
				
				<div>
				<Carousel  afterChange={onChange} autoplay='true' arrows="true" prevArrow={<img src={preArrow}/>} nextArrow={<img src={nextArrow}/>}>
				    <div>
						<div className='gameEnterBanner'>
							<Image preview={false}
									src={banner_1}
							/>
							<div className='gameEnterTx'>
								CryptoSteam is community-driven, through a revolutionary token economy<br/> 
								system that combines NFT and Defi, creating a truly unique ``Play to Earn``<br/>
								game distribution platform for users.
								<div className="gameEnterBtn" align="center">
									<a href="http://game.dedragon.com/">
										<Image preview={false} className='game-img'src={SignUp}/>
									</a>
								</div>
								
							</div>
							<div className='bannerCover'>
								<Image preview={false}
										src={banner_22}
								/>				
							</div>
						</div>	
				    </div>
				    <div>
						<div className='gameEnterBanner'>
							<Image preview={false}
									src={banner_18}
							/>
							<div className='playToEarnBtn'>
								<a href="http://game.dedragon.com/">
									<Image preview={false} className='game-earn'src={playToEarn}/>
								</a>
							</div>
							{/* <div className='whitepaperBtn'>
								<a href="">
									<Image preview={false} className='game-paper'src={whitepaper}/>
								</a>
							</div> */}
							<div className='bannerCover'>
								<Image preview={false}
										src={banner_22}
								/>				
							</div>
						</div>
				      
				    </div>
				    {/* <div>
				      <Image preview={false}
				      		src={banner_1}
				      />
				    </div> 
				    <div>
				      <Image preview={false}
				      		src={banner_18}
				      />
				    </div> */}
				  </Carousel>
				  
				</div>
			</div >
			<div className="homeBg">
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
			<div className='banner_3 welcomeToD'>
				<div className='banener-image3' >
					<Image preview={false} 
							src={banner_4}
					/>
				</div>
				<div className='banener-image3' >
					<Image preview={false} 
							src={banner_5}
					/>
				</div>
				<div className='banener-image3' >
					<Image preview={false} 
							src={banner_6}
					/>
				</div>
			</div>
			<div className='banner_3'>
				<div className='banener-image4' align="center">
					<Image preview={false} 
							src={banner_7}
					/>
				</div>
				<div className='banener-image4-1' align="center">
					<Image preview={false} 
							src={banner_8}
					/>
				</div>
				<div className='banener-image4-1' align="center">
					<Image preview={false} 
							src={banner_9}
					/>
				</div>
				<div className='banener-image4-1' align="center">
					<Image preview={false} 
							src={banner_10}
					/>
				</div>
			</div>
			<div className='banner_3'>
				<div className='banner-nextGame' align="center">
					<Image preview={false} 
							src={banner_11}
					/>
				</div>
				<div className='banener-image3' align="center">
					<Carousel afterChange={onChange}  autoplay='true'>
						<div>
						  <Image preview={false} className=''
						  					src={banner_12}
						  />
						</div>
						<div>
						  <Image preview={false} className=''
						  					src={banner_20}
						  />
						</div>
						<div>
						  <Image preview={false} className=''
						  					src={banner_21}
						  />
						</div>
					</Carousel>
				</div>
				<div className='banner-ourTeam' align="center">
					<Image preview={false}
								src={banner_13}
						/>
				</div>
				<div className='banner-join' align="center">
					<Image preview={false}
								src={banner_14}
						/>
					<div className='joinLink-space banner-joinLink' align="center">
						<div className='joinPos'>
							<a href="https://twitter.com/DedragonWorld">
								<Image preview={false} className='linkShadow'
											src={banner_15}
									/>
							</a>		
						</div>
						<div className='joinPos'>
							<a href="https://discord.gg/GPnye5PB">
								<Image preview={false} className='linkShadow'
											src={banner_16}
									/>
							</a>		
						</div>
						<div className='joinPos'>
							<a href="http://t.me/dedragon_cryptosteam">	
								<Image preview={false} className='linkShadow'
											src={banner_17}
									/>
							</a>		
						</div>
					</div>	
				</div>
			</div>
			
				<div className='footerStyle'>
					<div className="copyStyle" align="center"> CryptoSteam @ 2021, All rights reserved</div>
				</div>
					
				</div>
			</Layout>
        );
    }
}


export default Website3rd;