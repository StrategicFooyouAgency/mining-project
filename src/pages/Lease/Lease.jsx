import React, {useState, useEffect} from 'react';
import './Lease.scss'
import CustomTab from "../../components/CustomTab/CustomTab";
import CustomFilter from "../../components/CustomFilter/CustomFilter";
import {Select, Modal} from "antd";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import LeaseInfo from "./LeaseInfo/LeaseInfo";

const Lease = props => {
    const [tabProps, setTabProps] = useState({
        data: [
            {
                key: 'Dragon',
                title: 'Dragon'
            },
            {
                key: 'Account',
                title: 'Account'
            },
        ],
        selectedTabKey: 'Dragon'
    });
    const [filterProps, setFilterProps] = useState({
        data: [
            {
                title: 'Time',
                key: 'Time',
                children: [
                    {
                        label: '< 1M',
                        value: '< 1M',
                    },
                    {
                        label: '< 3M',
                        value: '< 3M',
                    },
                    {
                        label: '< 6M',
                        value: '< 6M',
                    },
                    {
                        label: '< 12M',
                        value: '< 12M',
                    },
                    {
                        label: '< 24M',
                        value: '< 24M',
                    },
                    {
                        label: '> 24M',
                        value: '> 24M',
                    },
                ]
            },
            {
                title: 'Fee',
                key: 'Fee',
                children: [
                    {
                        label: '< 10%',
                        value: '< 10%',
                    },
                    {
                        label: '< 20%',
                        value: '< 20%',
                    },
                    {
                        label: '< 30%',
                        value: '< 30%',
                    },
                    {
                        label: '> 30%',
                        value: '> 30%',
                    },
                ]
            },
            {
                title: 'Hash Power',
                key: 'Hash Power',
                children: [
                    {
                        label: '< 1000',
                        value: '< 1000',
                    },
                    {
                        label: '< 2000',
                        value: '< 2000',
                    },
                    {
                        label: '< 5000',
                        value: '< 5000',
                    },
                    {
                        label: '> 5000',
                        value: '> 5000',
                    },
                ]
            }
        ],
        selectedFilterData: {}
    })
    const [listProps, setListProps] = useState({
        data: []
    })
    const [leaseInfoModal, setLeaseInfoModal] = useState({
        visible: false,
    })

    useEffect(() => {
        const data = [];
        for (let i = 0; i < 12; i++) {
            data.push(i);
        }
        setListProps(state => ({
            ...state,
            data
        }))
    }, [])

    const openLeaseInfoModal = () => {
        setLeaseInfoModal(state => ({
            ...state,
            visible: true
        }))
    }

    return (
       <div className='Lease-wrapper'>
           <div className='Lease'>
               <div className="Lease-header">
                   <CustomTab
                       data={tabProps.data}
                       selectedTabKey={tabProps.selectedTabKey}
                   />
               </div>
               <div className="Lease-body">
                   <div className="Lease-body-left">
                       <div className="Lease-body-left-border">
                           <CustomFilter data={filterProps.data}/>
                       </div>
                   </div>
                   <div className="Lease-body-right">
                       <div className="Lease-body-right-border">
                           <div className="Lease-body-right-header">
                               <span className='Lease-body-right-number'>{(84567987).toLocaleString()}</span>
                               <Select defaultValue='Lowest Price' className='selectBg' style={{minWidth: '170px',  marginLeft: '10px'}} options={[
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
                           <div className="Lease-body-right-list">
                               {
                                   listProps.data.map((item, index) => {
                                       return (
                                           <div onClick={openLeaseInfoModal} key={index} className="Lease-body-right-list-item">
                                               <div className="Lease-body-right-list-item-id">Player ID</div>
                                               <div className="Lease-body-right-list-item-num">Hash
                                                   Power: {Number(2584).toLocaleString()}</div>
                                               <div className="Lease-body-right-list-item-btn">
                                                   <div className="Lease-body-right-list-item-btn-l">
                                                       2M
                                                   </div>
                                                   <div className="Lease-body-right-list-item-btn-l">15%</div>
                                               </div>
                                           </div>
                                       )
                                   })
                               }
                           </div>
                           <div className="Lease-body-right-pagination">
                               <CustomPagination/>
                           </div>
                       </div>
                   </div>
               </div>
               <Modal
                   title=' '
                   visible={leaseInfoModal.visible}
                   destroyOnClose={true}
                   footer={null}
                   onCancel={() => {
                       setLeaseInfoModal(state => ({...state, visible: false}))
                   }}
                   className='CustomDialog'
                   width='47vw'
                   maskClosable={false}
               >
                   <LeaseInfo onCancel={() => {
                       setLeaseInfoModal(state => ({...state, visible: false}))
                   }} />
               </Modal>
           </div>
       </div>
    )
}

export default Lease;