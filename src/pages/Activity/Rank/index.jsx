import React from 'react';
import './index.scss';
import TopClassTable from './components/TopClassTable/TopClassTable';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import '../../MyAccount/Account/Account.scss'
import Swiper from '../../../components/Swiper';

const { TabPane } = Tabs;
function Rank() {
  
  const num = [1,2,3,4,5,6,7,8,9,10];
  
  return (
    <div className = {'rank-content'}>
        <div className={'swipper-content'}><Swiper/></div> 
        <div className = {'rank-body'}>
           <img className={"content-background"} src={require('../../../assets/images/mountain/fram-2.png').default} alt="" />
           <div className = {'body-header'}>
           <div className="dragon">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Hash " key="1" class="defi-dragon">
                <div className="dragon-content">
                  {
                    num.map((item,index) => {
                      return <TopClassTable index={index}/>
                    })
                  }
                </div>
              </TabPane>
              <TabPane tab="PvP " key="2">
               
              </TabPane>
            </Tabs>
          </div>
           </div>
        </div>
    </div>
  );
}

export default Rank;
