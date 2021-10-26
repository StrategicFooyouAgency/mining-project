import React, {useState, useEffect} from 'react';
import './LeaseInfo.scss';
import {Modal, Carousel, Input, Form} from 'antd';
import {CaretLeftOutlined, CaretRightOutlined} from '@ant-design/icons'

const FormItem = Form.Item;
const LeaseInfo = props => {
    const {onCancel} = props;
    const [modelProps, setModalProps] = useState({
        title: '',
        visible: false,
        class: 'CustomDialog',
        carouselData: []
    })

    const [dragonListProps, setDragonListProps] = useState({
        data: []
    })

    const [buildingListProps, setBuildingListProps] = useState({
        data: []
    })

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 18; i++) {
            arr.push(i)
        }
        setDragonListProps(state => ({
            ...state,
            data: arr
        }))
        setBuildingListProps(state => ({
            ...state,
            data: arr
        }))
        setModalProps(state => ({
            ...state,
            carouselData: arr
        }))
    }, [])

    /**
     * 渲染modal内容
     */
    const renderModalContent = () => {
        switch (modelProps.title) {
            case "Dragon Information":
                return (
                    <div className='Dragon-Information'>
                        <div className="Dragon-Information-title">{modelProps.title}</div>
                        {
                            dragonListProps.data.map((item, index) => (
                                <div key={index} className="Dragon-Information-item">
                                    <div className="Dragon-Information-item-dragon"/>
                                </div>
                            ))
                        }
                    </div>
                );
            case "Build Information":
                return (
                    <div className='Build-Information'>
                        <div className="Build-Information-title">{modelProps.title}</div>
                        {
                            buildingListProps.data.map((item, index) => (
                                <div key={index} className="Build-Information-item">
                                    <div className="Build-Information-item-dragon"/>
                                </div>
                            ))
                        }
                    </div>
                );
            case "Island Information":
                return (
                    <div className='Island-Information'>
                        <div className="Island-Information-title">{modelProps.title}</div>
                        <Carousel swipeToSlide={true} dots={false} slidesToShow={3} slidesToScroll={1} arrows={true}
                                  prevArrow={<CaretLeftOutlined />}
                                  nextArrow={<CaretRightOutlined />}>
                            {
                                modelProps.carouselData.map((item, index) => {
                                    if (index < 2) {
                                        return (
                                            <div key={index} className='Island-Information-item'>

                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={index} className='Island-Information-item'>
                                                <div className="Island-Information-lock">
                                                    <div className="Island-Information-lock-icon"/>
                                                </div>
                                            </div>
                                        )
                                    }

                                })
                            }
                        </Carousel>
                    </div>
                );
            case "rent":
                return (
                    <div className='rent'>
                        <div className="rent-top">
                            <div className="rent-top-l">
                                <div className='rent-top-title'>Player ID</div>
                                <div className='rent-top-text'>Hash Power:</div>
                                <div className='rent-top-text'>2584</div>
                            </div>
                            <div className="rent-top-r">
                                <div>Fee <div className='rent-top-r-feeBtn'>30%</div></div>
                                <div>Time <div className='rent-top-r-feeBtn'>3</div>Month</div>
                            </div>
                        </div>
                        <div className="rent-middle">
                            <Form layout='vertical'>
                                <FormItem label='Tenant Password' name='password'>
                                    <Input.Password visibilityToggle={false} style={{width: '500px'}}/>
                                </FormItem>
                            </Form>

                        </div>
                        <div className="rent-bottom">
                            <div className="rent-bottom-rent">Rent</div>
                            <div className="rent-bottom-cancel" onClick={()=>{setModalProps(state => ({...state, visible: false}))}}>Cancel</div>
                        </div>
                    </div>
                )
            default:
                return null;
        }
    }

    return (
        <div className='LeaseInfo-wrapper'>
            <div className='LeaseInfo'>
                <div className="LeaseInfo-title">Inventory</div>
                <div className="LeaseInfo-l">
                    <div className="LeaseInfo-l-id">Player ID</div>
                    <div className='LeaseInfo-l-text1'>Ruby's Power: 2584</div>
                    <div className='LeaseInfo-l-text1'>Rental time: 1 Month</div>
                    <div className='LeaseInfo-l-text1'>Rental fee: 30% income</div>
                </div>
                <div className="LeaseInfo-r">
                    <div className="LeaseInfo-r-t">
                        <div className="LeaseInfo-r-t-l">
                            <div className="LeaseInfo-r-t-l-text0">{Number(156.166).toLocaleString()} CST</div>
                            <div className="LeaseInfo-r-t-l-text">{Number(759332.187).toLocaleString()} Ruby</div>
                            <div className="LeaseInfo-r-t-l-text">{Number(137952).toLocaleString()} Foods</div>
                        </div>
                        <div className="LeaseInfo-r-t-r">
                            <div className="LeaseInfo-r-t-r-btn" onClick={() => {
                                setModalProps(state => ({
                                    ...state,
                                    title: 'Dragon Information',
                                    visible: true,
                                    class: 'CustomDialog'
                                }))
                            }}>
                                <div>Dragons</div>
                                <div>126</div>
                            </div>
                            <div className="LeaseInfo-r-t-r-btn" onClick={() => {
                                setModalProps(state => ({
                                    ...state,
                                    title: 'Build Information',
                                    visible: true,
                                    class: 'CustomDialog'
                                }))
                            }}>
                                <div>Buildings</div>
                                <div>51</div>
                            </div>
                            <div className="LeaseInfo-r-t-r-btn" onClick={() => {
                                setModalProps(state => ({
                                    ...state,
                                    title: 'Island Information',
                                    visible: true,
                                    class: 'account-modal account-modal-simble'
                                }))
                            }}>
                                <div>Islands</div>
                                <div>2</div>
                            </div>
                        </div>
                    </div>
                    <div className="LeaseInfo-r-b">
                        You need to pay <span style={{color: '#2251A8'}}>10 CSTS</span> as a deposit, which will be returned
                        after completing the order
                    </div>
                </div>
            </div>
            <div className="LeaseInfo-rent" onClick={() => {
                setModalProps(state => ({
                    ...state,
                    title: 'rent',
                    visible: true,
                    class: 'account-modal account-modal-simble'
                }))
            }}>Rent
            </div>

            <Modal
                visible={modelProps.visible}
                destroyOnClose={true}
                footer={null}
                onCancel={() => {
                    setModalProps(state => ({...state, visible: false}))
                }}
                className={modelProps.class}
                width={916}
                style={{height: '812px'}}
                maskClosable={false}
            >
                {renderModalContent()}
            </Modal>
        </div>
    )
}

export default LeaseInfo;