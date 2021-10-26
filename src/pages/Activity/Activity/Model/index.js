import React from "react";
import "./index.scss";

function WithdrawModal(props) {
  return (
    <div className={"M-Modal"}>
      <div className={"M-Modal-content"}>
        <div className={"close-btn"} onClick={props.handelCloseModal}>
          
        </div>
        <div className="title"> 4 Bids </div>
        <div className={"M-Modal-body"}>
          <div
            style={{
              width: 703,
              height: 212,
              marginTop: 50,
              marginLeft: 50,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="body-1">
              <div> 0.025 USDT </div> <div> 0.025 USDT </div>
              <div> 0.025 USDT </div> <div> 0.025 USDT </div>
            </div>
            <div className="body-2">
              <div className="body-2-title">
                <div> PayerID </div> <div> PayerID </div> <div> PayerID </div>
                <div> PayerID </div>
              </div>
              <div className="body-2-title">
                <div className="titlr-B"> portrait </div>
                <div className="titlr-B"> portrait </div>
                <div className="titlr-B"> portrait </div>
                <div className="titlr-B"> portrait </div>
              </div>
            </div>
          </div>
          <div className="heng"> </div>
          <div className="content">
            <div className="title-1"> My bid </div>
            <div className="content-1">
              <div>
                <div className="box-2">
                  <div className="box-txt"> 0 </div>
                  <div className="box-blue"> USDT </div>
                </div>
              </div>
            </div>
            <div className="content-2"> Time 00: 19: 47 </div>
            <div className="content-3"> Pay </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithdrawModal;