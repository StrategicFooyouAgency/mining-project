import React, { useState } from 'react';
import "./SwapItemDetail.scss";

function SwapItemDetail(props) {
    const [information, setInformation] = useState([
        {
          value: `1,755,573.617`,
          label: 'Total Staked'
        },
        {
          value: `$2,825,721.016`,
          label: 'Total USD Value'
        },
        {
          value: `0`,
          label: 'My Staked'
        },
        {
          value: `0`,
          label: 'Balance'
        },
        {
            value: `0`,
            label: 'Rewards'
          }
      ])
    const numericalValue = ['15x','APY:3239%','APR:352%'];
    const {itemBtnInformation} = props;
    return (
        <div className={'swapItemDetail-container'}>
            <div className={'title'}>
               CTS-BUSD LP
            </div>
            <div className={'numerical'}>
                <div className={'numerical-content'}>
                     {
                         numericalValue.map((item,index) =>(
                                <div className={`numerical-item numerical-${index}`} key={index}>
                                    {item}
                                </div>
                         ))
                     }
                </div>
            </div>
            <div className={'detail-information'}>
                {
                    information.map((item,index) => (
                        <div className={'information-item'}>
                            <div className={'information-key'}>
                                 {item.label}
                            </div>
                            <div className={'information-value'}> 
                            {item.value}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={'detail-foot-btn'}>
                <div className={'footer-btn-box'} style={{marginBottom:'13px'}}>
                    <button className={'approve-btn'}>Approve</button>
                    <button className={'wthdraw-btn'} onClick={props.handelOpenModal}>Withdraw</button>
                </div>
                <div className={'footer-btn-box'}>
                    {itemBtnInformation.btnText &&
                        itemBtnInformation.btnText.map((item,index)=>{
                            return <button className={`add-btn-${index} ${itemBtnInformation.color[index]} btn-${itemBtnInformation.btnText.length}`} key={index}>{item}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SwapItemDetail;
