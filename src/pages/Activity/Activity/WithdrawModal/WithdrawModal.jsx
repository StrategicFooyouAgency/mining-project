import React, { useState } from 'react';
import './WithdrawModal.scss';
import Model from '../Model/index'
function Modal(props) {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const handelOpenModal = () => {
    if (showWithdrawModal) return;
    setShowWithdrawModal(true);
  }
  const handelCloseModal = () => {
    setShowWithdrawModal(false);
  }
  return (
    <div className={'Modal'}>
      {
        showWithdrawModal && <Model handelCloseModal={handelCloseModal} />
      }
      <div className={'Modal-content'}>
        <div className={'close-btn'} onClick={props.handelCloseModal}></div>

        <div className="content">
          <div className="content-left">
            <div className='content-left-title'>Hash Power：168</div>
            <div>
              <img src={require('../../../../assets/images/activity/WechatIMG245.png').default} width='215px' height='313px' box-shadow='0px 11px 0px 0px rgba(0, 0, 0, 0.31)' />
            </div>
            <div className="content-left-ccc">LV 10</div>
            <div className="content-left-ddd">Current：0.006 USDT</div>
            <div className="content-left-ddd">Timi：00:19:47</div>
            <div className="content-left-eee" onClick={handelOpenModal}>
              Bid
            </div>
          </div>
          <div className="content-right">
            <div className="content-right-1">
              <div className="hearder">
                <div className="hearder-1" style={{ marginBottom: 10 }}>
                  #0000000001
                </div>
                <div className="hearder-2">Breed count: 7</div>
              </div>
              <div className='right'>
                <div className='right-1'>Origin</div>
                <div className='right-2'>DLC_1</div>
                <div className='right-3'>DLC_2</div>
                <div className='right-4'>DLC_2</div>
              </div>
            </div>
            <div className="content-right-2">
              <div className="title">Information</div>
              <div className="body">
                <table border="0" width="100%" style={{ marginLeft: -20, fontSize: 16, fontWeight: 800 }} cellspacing="0">
                  {/* <!--tr表示行--> */}
                  <tr style={{ height: 70 }}>
                    {/* <!--td表示列--> */}
                    <td align='center' >HP</td>
                    <td align='center'>ATK</td>
                    <td align='center'>DEF</td>
                    <td align='center'>SPEED</td>
                  </tr>
                  <tr style={{ height: 50 }}>
                    {/* <!--td表示列--> */}
                    <td align='center'>xxx-xx-xx-hh:mm:ss</td>
                    <td align='center'>Chest</td>
                    <td align='center'>Super Chest </td>
                    <td align='center'>Chest</td>
                  </tr>

                </table>
              </div>

            </div>
            <div className="content-right-3">
              <div id="cent" style={{ marginRight: 10 }}>
                <div className="title">Attribute</div>
                <div className="body">
                  <div className="body-1" style={{ paddingTop: 17 }}>
                    <div className="yy-1">
                      Fire
                    </div>
                    <div className="yy-2">
                      Water
                    </div>
                    <div className="yy-2">
                      Ground
                    </div>
                    <div className="yy-2">
                      Wind
                    </div>
                    <div className="yy-2">
                      Light
                    </div>
                    <div className="yy-6">
                      Dark
                    </div>
                  </div>
                </div>
              </div>
              <div id="cent">
                <div className="title">Skill</div>
                <div className="body">
                  <div className="body-2">
                    <div className="body-img"></div>
                    <div className="body-txt">
                      <div className="body-txt-1">GAZE:</div>
                      <div className="body-txt-2">Annotate the target,</div>
                      <div className="body-txt-2">reduce defense by</div>
                      <div className="body-txt-2">10 points for 3</div>
                      <div className="body-txt-2">rounds.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-right-4">
              <div className="title" >Body Parts</div>
              <div className="body-y">
                <div className="body-1" style={{ paddingTop: 15 }}>
                  Horn
                  Icon
                </div>
                <div className="body-2">-- -</div>
                <div className="body-3" style={{ paddingTop: 15 }}>Dorsum Icon</div>
                <div className="body-2" style={{ with: 83, height: 32, padding: 0, marginTop: 30 }}>
                  Ordinary
                  wings
                </div>
                <div className="body-1" style={{ paddingTop: 15 }}>
                  Body
                  Icon
                </div>
                <div className="body-2">-- -</div>
                <div className="body-3" style={{ paddingTop: 15, paddingRight: 10, paddingLeft: 20 }}>
                  Tail
                  Icon
                </div>
                <div className="body-2">Spikes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Modal;
