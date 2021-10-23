import React, { Component } from 'react';
import './Website.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Image} from 'antd';


const { Header, Content, Footer } = Layout;

class Webfooter extends Component {
    render() {
        return (
		// <Layout className="layout">
			<div className="site-footer" >
			
				<div className="footer-related w1100">
					<div className="footer-article w1100 inline-item" align="center">
					<div style={{width:'auto'}} className='dl-inb' >
						<dl className="col-article">
							<dt className = "text-border">Recent Posts</dt>
			
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							
							
						</dl>
						</div>
						<div className='dl-inb'>
						<dl className="col-article">
							<dt className = "text-border">Twitter</dt>
										
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							
						</dl>
					</div>
						<div className='dl-inb'>
						<dl className="col-article">
							<dt className = "text-border">About us</dt>
										
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							<div className='title-underlinea'><i>Show some relevont</i></div>
							<div className='content-underlinea'><i>Content text</i></div>
							
						</dl>
					</div>
			</div>
			
					<div className="footer-info w1100">
						<div className="info-text w1100">
							<p className="copyright">
								deti dragon©2021,All rights reaerved<em></em>
							</p>
							<p className="qualified">
			
							</p>
						</div>
					</div>
			
				</div>
			</div>
			// </Layout>
        )
    }
}

export default Webfooter;

