import { useState, useEffect } from 'react';
import { Table, Typography, Button, Space } from 'antd'

import { DeleteOutlined } from '@ant-design/icons';

import axios from 'axios'
import NewPickUpPoint from './PickUpPointsDashboard/NewPickUpPoint';


const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
});

const { Title } = Typography;

function PickUpPointsDashboard() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="default" onClick={() => {
          console.log(record + "DELETE HERE MAKE THIS TODO AHAHAH");
          // axios.delete(`http://localhost:8080/api/v1/deliveries/${record.deliveryId}`)
        }}>
          <DeleteOutlined />
        </Button>
      ),
    },
  ]

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await client.get('/pickuppoints/');
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{
      textAlign: 'center',
    }}>
      <NewPickUpPoint />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 10,
          position: ['bottomCenter'],
        }}
        style={{
          width: '90%',
          position: 'relative',
          left: '50%',
          transform: 'translate(-50%)',
          paddingTop: '3em',
        }}
      />
    </div>
  )
}

export default PickUpPointsDashboard
