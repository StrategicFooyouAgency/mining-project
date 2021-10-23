import "./MyEgg.scss";

import React, { Component } from 'react';
import Egg from '../../../components/Egg/Egg';
import BuyBack from '../../../components/BuyBack/BuyBack';

class MyEgg extends Component {
    

    render() {
        return (
            <div id="MyEgg">
                <Egg></Egg>
                <BuyBack></BuyBack>
            </div>
        );
    }
}

export default MyEgg;