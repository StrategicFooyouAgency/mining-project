



import React from "react";
import "./index.scss";

function Modal(props) {
  return (
    <div id="A-Modal">
      <div className="A-Modal-content">
        <div className="close-btn" onClick={props.handelCloseModal}></div>
        <div className="title"> Normal Chest </div>
        <div className="content">
          <div style={{ marginLeft: 100 }}>
            <div className="title-1"> Max amount of BOX raffle： 1 </div>
            <div className="content-1">
              <div>
                <div className="box-2">
                  <div className="box-box"><div style={{ marginLeft: 100, marginTop: 10 }}> 1</div></div>
                </div>
              </div>
              <div className="box-blue-y" style={{ width: 170 }}> Max </div>
            </div>
            <div className="content-5">
              <div className="name"> Chest Raffle: 0 </div> <div className="nanan"> Raffle Price: 7.4103 Ruby </div>
            </div>
            <div className="content-2"> 7.4103 </div>
            <div className="content-4"> Ruby </div>
            <div className="content-3"> Approve </div>
            <div className='content-6'> Note: 1 wallet address can only participate in each </div>
            <div className="content-7"> raffle draw once </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

