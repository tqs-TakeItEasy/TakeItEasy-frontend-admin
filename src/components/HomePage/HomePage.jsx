import React from 'react';
import { Typography, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div style={{
      textAlign: 'center',
    }}>
      <Title>Welcome to Take It Easy</Title>
      <Paragraph data-testid="HomePage">
        We make delivery fast and hassle-free.
        <br />
        With Take It Easy, you can receive packages with ease.
      </Paragraph>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/truck.png" alt="logo" style={{
          transform: "scale(1.2)",
        }}/>
      </div>
    </div>
  );
};

export default HomePage;