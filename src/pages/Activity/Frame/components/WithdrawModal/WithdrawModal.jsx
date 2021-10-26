import React from 'react';
import './WithdrawModal.scss';
function WithdrawModal(props) {
  return (
      <div className={'wthdrawModal'}>
        <div className={'wthdrawModal-content'}>
        <div className={'close-btn'} onClick={props.handelCloseModal}></div>

            <div className="title">
            Withdraw
            </div>
            <div className={'wthdrawModal-body'}>
                <button className={'amount-btn'}>Amount</button>
                <div className={'input-box'}>
                <input type="text" value={'0'}/>

                </div>
                <button className={'max-btn'}>Max</button>
            </div>
         </div>
      </div>
  );
}

export default WithdrawModal;
