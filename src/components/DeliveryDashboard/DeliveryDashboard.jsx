import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, Typography, Button } from 'antd'

import { DeleteOutlined } from '@ant-design/icons';

const client = axios.create({
    baseURL: 'http://deti-tqs-11.ua.pt:8080/api/v1',
});

const { Title } = Typography;

function DeliveryDashboard() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'deliveryId',
            key: 'deliveryId',
            sorter: (a, b) => a.deliveryId - b.deliveryId,
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            key: 'owner',
        },
        {
            title: 'PickUpPoint',
            dataIndex: 'pickUpPoint',
            key: 'pickUpPoint',
        },
        {
            title: 'Store',
            dataIndex: 'store',
            key: 'store',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Registry Date',
            dataIndex: 'registryDate',
            key: 'registryDate',
        },
        {
            title: 'Delivery Date',
            dataIndex: 'deliveryDate',
            key: 'deliveryDate',
        },
        {
            title: 'PickUp Date',
            dataIndex: 'pickUpDate',
            key: 'pickUpDate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button type="default" onClick={ async () => {
                    const r = await client.delete(`/deliveries/${record.deliveryId}/`);
                    fetchData();
                }}>
                    <DeleteOutlined />
                </Button>
            ),
        },
    ]

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await client.get('/deliveries/');
        const newData = response.data.map((delivery) => ({
            "deliveryId": delivery.id,
            "owner": delivery.userName,
            "pickUpPoint": delivery.pickupPoint.name,
            "store": delivery.store.name,
            "status": delivery.status,
            "registryDate": delivery.registeryDate,
        }));
        setData(newData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{
            textAlign: 'center',
        }}>
            <Title level={2}>[ Deliveries ]</Title>

            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 10,
                    position: ['bottomRight'],
                }}
                style={{
                    width: '90%',
                    position: 'relative',
                    left: '50%',
                    transform: 'translate(-50%)',
                    paddingTop: '3em',
                }}
                data-testid="DeliveryDashboard"
            />
        </div>
    )
}

export default DeliveryDashboard;