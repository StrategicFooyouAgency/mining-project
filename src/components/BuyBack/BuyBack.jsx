
import './BuyBack.scss';

import React, { Component } from 'react';
import { Table } from 'antd';

class BuyBack extends Component {
    state = {
        columns: [
            {
                title: 'Time',
                dataIndex: 'Time',
                key: 'Time',
              },
              {
                title: 'Type',
                dataIndex: 'Type',
                key: 'Type',
              },
              {
                title: 'Amount',
                dataIndex: 'Amount',
                key: 'Amount',
              },
              {
                title: 'Status',
                dataIndex: 'Status',
                key: 'Status',
              },
              {
                title: 'Legend',
                dataIndex: 'Legend',
                key: 'Legend',
              }
        ],
        buybackInfos : [
            {
                Key: 100,
                Time: 'mm/dd/yyyy 00:00:00',
                Type: 'Buyback Burn',
                Amount: 'Amount',
                Status: 'Legend',
                Legend: '→'
            },
            {
                Key: 101,
                Time: 'mm/dd/yyyy 00:00:00',
                Type: 'Buyback Burn',
                Amount: 'Amount',
                Status: 'Legend',
                Legend: '→'
            },
            {
                Key: 102,
                Time: 'mm/dd/yyyy 00:00:00',
                Type: 'Buyback Burn',
                Amount: 'Amount',
                Status: 'Legend',
                Legend: '→'
            },
            {
                Key: 103,
                Time: 'mm/dd/yyyy 00:00:00',
                Type: 'Buyback Burn',
                Amount: 'Amount',
                Status: 'Legend',
                Legend: '→'
            }
        ]

    };
    render() {
        return (
            <Table id="buyBack" pagination={false} columns={this.state.columns} dataSource={this.state.buybackInfos} />
        );
    }
}

export default BuyBack;