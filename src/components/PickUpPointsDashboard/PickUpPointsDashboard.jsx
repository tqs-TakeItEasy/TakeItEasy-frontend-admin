import React from 'react';
import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Typography } from 'antd'

import { DeleteOutlined } from '@ant-design/icons';

import axios from 'axios'

const { Title } = Typography;

const client = axios.create({
  baseURL: 'http://deti-tqs-11.ua.pt:8080/api/v1',
});


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
        <Button type="default" onClick={async () => {
          const r = await client.delete(`/pickuppoints/${record.id}/`)
          fetchData();
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async (values) => {
    setConfirmLoading(true);

    values["companyId"] = 1;
    await axios.post('http://localhost:8080/api/v1/pickuppoints/add/', values);
    setConfirmLoading(false);
    setOpen(false);
    fetchData();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div style={{
      textAlign: 'center',
    }}>
      <Title level={2}>[ PickUpPoints ]</Title>
      <Modal
        title="New PickUpPoint"
        open={open}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        footer={null}
      >
        <Form
          name="newPickUpPoint"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleOk}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Name field is required.',
              },
            ]}
          >
            <Input placeholder='Name' />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: 'Address field is required.',
              },
            ]}
          >
            <Input placeholder='Address' />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Email field is required.',
              },
            ]}
          >
            <Input placeholder='Email' />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" data-testId='submitButton'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
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
        data-testId="PickUpPointsDashboard"
      />
      <Button type="primary" onClick={showModal} data-testId='addPickUpPointButton'>
        Add a new PickUpPoint
      </Button>
    </div>
  )
}

export default PickUpPointsDashboard
