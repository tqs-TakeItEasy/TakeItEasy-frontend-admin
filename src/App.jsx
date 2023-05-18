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
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="dashboard" icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<LaptopOutlined />} title="Submenu 1">
            <Menu.Item key="option1">Option 1</Menu.Item>
            <Menu.Item key="option2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<NotificationOutlined />} title="Submenu 2">
            <Menu.Item key="option3">Option 3</Menu.Item>
            <Menu.Item key="option4">Option 4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content className='content'>
          {selectedItem === 'dashboard' && <DeliveryDashboard />}
          {selectedItem === 'option1' && <h1>Option 1 Content</h1>}
          {selectedItem === 'option2' && <h1>Option 2 Content</h1>}
          {selectedItem === 'option3' && <h1>Option 3 Content</h1>}
          {selectedItem === 'option4' && <h1>Option 4 Content</h1>}
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
