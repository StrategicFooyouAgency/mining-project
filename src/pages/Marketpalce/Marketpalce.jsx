import React, {useState, useEffect} from 'react';
import './Marketpalce.scss';
import classNames from "classnames";
import CustomTab from "../../components/CustomTab/CustomTab";
import CustomFilter from "../../components/CustomFilter/CustomFilter";
import {Select, Modal} from "antd";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import DragonInfo from "./DragonInfo/DragonInfo";
const Marketpalce = () => {

    const [timeTabProps, setTimeTabProps] = useState({
        data: [
            {
                title: 'Last 24h',
                key: 'Last-24h',
                data: {
                    totalSale: 57253,
                    totalVolume: 4902.4,
                    dragonSold: 57207,
                },
            },
            {
                title: '7days',
                key: '7days',
                data: {
                    totalSale: 68976,
                    totalVolume: 9982.7,
                    dragonSold: 69807
                },
            },
            {
                title: '30days',
                key: '30days',
                data: {
                    totalSale: 257253,
                    totalVolume: 164702.2,
                    dragonSold: 678543
                },
            },
        ],
        selectedTabKey: 'Last-24h'
    });

    const [typeTabProps, setTypeTabProps] = useState({
        data: [
            {
                key: 'Dragon',
                title: 'Dragon'
            },
            {
                key: 'items',
                title: 'items'
            },
            {
                key: 'food',
                title: 'food'
            }
        ],
        selectedTabKey: 'Dragon'
    })

    const [filterProps, setFilterProps] = useState({
        data: [
            {
                title: 'ATTRIBUTE',
                key: 'ATTRIBUTE',
                children: [
                    {
                        label: 'Fire',
                        value: 'Fire',
                    },
                    {
                        label: 'Land',
                        value: 'Land',
                    },
                    {
                        label: 'Wind',
                        value: 'Wind',
                    },
                    {
                        label: 'Light',
                        value: 'Light',
                    },
                    {
                        label: 'Dark',
                        value: 'Dark',
                    },
                ]
            },
            {
                title: 'STAGE',
                key: 'STAGE',
                children: [
                    {
                        label: 'Egg',
                        value: 'Egg',
                    },
                    {
                        label: 'Dragon',
                        value: 'Dragon',
                    },
                ]
            },
            {
                title: 'BREED COUNT',
                key: 'BREED COUNT',
                slider: true,
            },
            {
                title: 'QUALITY',
                key: 'QUALITY',
                children: [
                    {
                        label: 'common',
                        value: 'common',
                    },
                    {
                        label: 'rare',
                        value: 'rare',
                    },
                    {
                        label: 'epic',
                        value: 'epic',
                    },
                    {
                        label: 'legend',
                        value: 'legend',
                    },
                ]
            }
        ],
        selectedFilterData: {}
    })

    const [dragonListProps, setDragonListProps] = useState({
        data: []
    })

    const [dragonModal, setDragonModal] = useState({
        visible: false,
        dragonInfo: null,
    })

    useEffect(() => {
        const data = [];
        for (let i = 0; i < 20; i++) {
            data.push(i)
        }
        setDragonListProps(state => ({
            ...state,
            data
        }))
    }, [])

    const timeTabChange = (selectedTabKey) => {
        setTimeTabProps(state => ({
            ...state,
            selectedTabKey
        }))
    }

    const typeTabChange = (selectedTabKey) => {
        setTypeTabProps(state => ({
            ...state,
            selectedTabKey
        }))
    }

    const filterChange = (data) => {
        setFilterProps(state => ({
            ...state,
            selectedFilterData: data
        }))
    }

    const openDragonModal = (dragonInfo) => {
        setDragonModal(state => ({
            ...state,
            visible: true,
            dragonInfo
        }))
    }


    const renderMarketBottom = () => {
        switch (typeTabProps.selectedTabKey) {
            case "Dragon":
                return (
                    <>
                        <div className="Market-body-left">
                            <CustomFilter onChange={filterChange} selectedFilterData={filterProps.selectedFilterData}
                                          data={filterProps.data}/>
                        </div>
                        <div className="Market-body-right">
                            <div className="Market-body-right-title">
                                <span className='Market-body-right-number'>{(84567987).toLocaleString()}</span>
                                <Select defaultValue='Lowest Price' className='selectBg' style={{minWidth: '170px', marginLeft: '10px'}} options={[
                                    {
                                        label: 'Lowest Price',
                                        value: 'Lowest Price'
                                    },
                                    {
                                        label: 'Highest Price',
                                        value: 'Highest Price'
                                    },
                                    {
                                        label: 'Lowest Productivity',
                                        value: 'Highest Productivity'
                                    }
                                ]}/>
                            </div>
                            <div className="Market-dragon-list">
                                {
                                    dragonListProps.data.map((item, index) => {
                                        return (
                                            <div onClick={() => {
                                                openDragonModal(item)
                                            }} key={index} className={classNames('Market-dragon-list-item')}>
                                                <div className="dragon-bg"/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='Market-dragon-pagination'><CustomPagination/></div>
                        </div>
                    </>
                )
            default:
                return null;
        }
    }

    return (
        <div className='Market-wrapper'>
            <div className='Market'>
                <div className="Market-timeTab">
                    <CustomTab
                        data={timeTabProps.data}
                        selectedTabKey={timeTabProps.selectedTabKey}
                        onChange={timeTabChange}
                    />
                </div>
                <div className="Market-timeTabBody">
                    {
                        timeTabProps.data.filter(item => item.key === timeTabProps.selectedTabKey).map(dataItem => (
                            <div className='Market-timeTabBody-wrapper' key={dataItem.key}>
                                <div className="Market-timeTabBody-item">
                                    <div className="Market-timeTabBody-item-left" style={{background: '#FA3136'}}/>
                                    <div className="Market-timeTabBody-item-right">
                                        <div className="Market-timeTabBody-item-right-title">TOTAL SALE</div>
                                        <div
                                            className="Market-timeTabBody-item-right-title">{Number(dataItem.data.totalSale).toLocaleString()}</div>
                                    </div>
                                </div>
                                <div className="Market-timeTabBody-item">
                                    <div className="Market-timeTabBody-item-left" style={{background: '#6B9BF5'}}/>
                                    <div className="Market-timeTabBody-item-right">
                                        <div className="Market-timeTabBody-item-right-title">TOTAL VOLUME</div>
                                        <div
                                            className="Market-timeTabBody-item-right-title">{Number(dataItem.data.totalVolume).toLocaleString()}</div>
                                    </div>
                                </div>
                                <div className="Market-timeTabBody-item">
                                    <div className="Market-timeTabBody-item-left" style={{background: '#FF8B3C'}}/>
                                    <div className="Market-timeTabBody-item-right">
                                        <div className="Market-timeTabBody-item-right-title">DRAGON SOLD</div>
                                        <div
                                            className="Market-timeTabBody-item-right-title">{Number(dataItem.data.dragonSold).toLocaleString()}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="Market-bottom">
                    <div className="Market-bottom-topBg"/>

                    <div className="Market-bottom-body">
                        <div className="Market-bottom-body-top">
                            <CustomTab
                                data={typeTabProps.data}
                                selectedTabKey={typeTabProps.selectedTabKey}
                                onChange={typeTabChange}
                            />
                        </div>
                        <div className="Market-bottom-body-bottom">
                            {renderMarketBottom()}
                        </div>
                    </div>
                </div>
                <Modal
                    visible={dragonModal.visible}
                    destroyOnClose={true}
                    width='50vw'
                    onCancel={() => {
                        setDragonModal(state => ({...state, visible: false}))
                    }}
                    footer={null}
                    maskClosable={false}
                    className='CustomDialog'
                    style={{height: '85vh'}}
                >
                    <DragonInfo />
                </Modal>
            </div>
        </div>
    )
}

export default Marketpalce;