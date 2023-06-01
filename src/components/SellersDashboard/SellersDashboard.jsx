import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, Button, Modal, Form, Input, Typography } from 'antd'

import { DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
});


function SellersDashboard() {
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Button type="default" onClick={async () => {
    //       r = await axios.delete(`http://localhost:8080/api/v1/stores/${record.id}`)
    //       fetchData();
    //     }}>
    //       <DeleteOutlined />
    //     </Button>
    //   ),
    // },
  ]

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await client.get('/stores/');
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
    await axios.post('http://localhost:8080/api/v1/stores/add/', values);
    setConfirmLoading(false);
    setOpen(false);
    fetchData();
  };

  const onFinishFailed = (errorInfo) => {
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div style={{
      textAlign: 'center',
    }}>
      <Title level={2}>[ eSellers ]</Title>
      <Modal
        title="New eSeller"
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
            <Input />
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
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
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
        data-testid="SellersDashboard"
      />
      <Button type="primary" onClick={showModal}>
        Add a new eSeller
      </Button>
    </div>
  )
}

export default SellersDashboard