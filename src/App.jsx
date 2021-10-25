// 模块1
import React from 'react';
import { Layout} from 'antd';
import { Route, Switch, Redirect } from "react-router-dom";
import './util/tool.jsx';
// 样式
import './App.css';
import './global.scss'
// 组件
import PageHeader from "./components/PageHeader/PageHeader";

// 页面组件
// import Mining from './pages/Mining/Mining';
// import Dashboard from './pages/Dashboard/Dashboard';
// import DashboardList from './pages/Dashboard/DashboardList';
import Activity from './pages/Activity/Activity';
import Marketpalce from './pages/Marketpalce/Marketpalce';
import Mountain from './pages/Mountain/Mountain';
import Lease from './pages/Lease/Lease';
import Website3rd from './pages/Website/Website3rd';

import Game from './pages/Game/Game';
import MyAccount from './pages/MyAccount/MyAccount';


//import ComboParts from "./components/ComboParts/ComboParts";

const { Content} = Layout;
global.constants = {
	accounts:null,
}

function App() {
  return (
    <div className="app">
       {/* <ComboParts width={256} height={256} parts={['Arm/Black_Arm','Body/Black_Body','Full/BlackDargon',
        'Head/Black_Head','Leg/Black_Leg','Wing/Black_Wing']} anim= "Idle"/> */}
       <Layout className="app-layout">
        <PageHeader />
        <Content>
            <Switch>
               {/* <Route path="/Dashboard" component={Dashboard} /> */}
              <Route path="/activity" component={Activity} />
              <Route path="/marketplace" component={Marketpalce} />
              <Route path="/mountain" component={Mountain} />
              <Route path="/lease" component={Lease} />
              <Route path="/game" component={Game} />
			        <Route path="/MyAccount" component={MyAccount} />
              <Route path="/" component={Website3rd} />
              <Redirect to="/"/>
            </Switch>
        </Content>
      </Layout>

    </div>
  );
}

export default App;
