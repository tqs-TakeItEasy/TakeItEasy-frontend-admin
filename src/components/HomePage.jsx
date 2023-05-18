import React from 'react';
import { Typography, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        padding: '40px',
        border: '2px solid #e8e8e8',
        borderRadius: '16px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Title>Welcome to Take It Easy</Title>
        <Paragraph>
          We make delivery fast and hassle-free.
          <br />
          With Take It Easy, you can send and receive packages with ease.
        </Paragraph>
        <Button type="primary" size="large" icon={<RocketOutlined />}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
