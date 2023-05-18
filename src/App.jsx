import { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

import DeliveryDashboard from './components/DeliveryDashboard'

import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

function App() {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const handleMenuClick = (item) => {
    setSelectedItem(item.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={'10vw'}>
        <Menu
          mode="inline"
          selectedKeys={[selectedItem]}
          onClick={handleMenuClick}
          style={{ background: '#748DA6', color: '#eeeeee', height: '100%', borderRight: 0  }}
        >
          <Menu.Item key="deliveries" icon={<UserOutlined />}>
            Deliveries
          </Menu.Item>
          <Menu.Item key="pups" icon={<UserOutlined />}>
            PickUpPoints (paradinha)
          </Menu.Item>
          <SubMenu key="sub1" icon={<LaptopOutlined />} title="Submenu 1">
            <Menu.Item key="option1">Option 1</Menu.Item>
            <Menu.Item key="option2">Option 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="stats" icon={<UserOutlined />}>
            Stats (?)
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ background: '#9CB4CC', padding: '4rem' }}>
          {selectedItem === 'dashboard' && <DeliveryDashboard />}
          {selectedItem === 'pups' && <h1>Option 1 Content</h1>}
          {selectedItem === 'stats' && <h1>Option 2 Content</h1>}
          {selectedItem === 'option1' && <h1>Option 1 Content</h1>}
          {selectedItem === 'option2' && <h1>Option 2 Content</h1>}
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
