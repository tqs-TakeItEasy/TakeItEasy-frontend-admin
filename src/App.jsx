import React from 'react';
import { useState } from 'react'
import { Layout, Menu } from 'antd';

import {
  HomeOutlined,
  ContainerOutlined,
  EnvironmentOutlined,
  ProjectOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import HomePage from './components/HomePage/HomePage';
import DeliveryDashboard from './components/DeliveryDashboard/DeliveryDashboard'
import PickUpPointsDashboard from './components/PickUpPointsDashboard/PickUpPointsDashboard';
import SellersDashboard from './components/SellersDashboard/SellersDashboard';
import Login from './Login';

import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const { Header, Content, Footer } = Layout;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const onFinish = (values) => {
    setLoggedIn(true);
  };

  const [selectedItem, setSelectedItem] = useState('homepage');

  const handleMenuClick = (item) => {
    setSelectedItem(item.key);
  };

  return (
    <div data-testId="App">
      {!loggedIn && <Login onFinish={onFinish} />}
      {loggedIn &&
        <Layout style={{ minHeight: '100vh' }}>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src="/takeiteasy_invert.png" alt="logo" height={"80%"} style={{ paddingRight: "30px" }} />
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedItem]}
              onClick={handleMenuClick}
              minWidth="80%"
            >
              <Menu.Item key="homepage" icon={<HomeOutlined />}>
                Home Page
              </Menu.Item>
              <Menu.Item key="deliveries" icon={<ContainerOutlined />}>
                Deliveries
              </Menu.Item>
              <Menu.Item key="pups" icon={<EnvironmentOutlined />}>
                PickUpPoints
              </Menu.Item>
              <Menu.Item key="esellers" icon={<ShoppingCartOutlined />}>
                eSellers
              </Menu.Item>
              <Menu.Item key="stats" icon={<ProjectOutlined />}>
                Stats
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              background: '#9CB4CC',
              padding: '30px 50px',
            }}
          >
            {selectedItem === 'homepage' && <HomePage />}
            {selectedItem === 'deliveries' && <DeliveryDashboard />}
            {selectedItem === 'pups' && <PickUpPointsDashboard />}
            {selectedItem === 'esellers' && <SellersDashboard />}
            {selectedItem === 'stats' && <h1>TODO</h1>}
          </Content>
        </Layout>
      }
    </div>
  )
}

export default App
