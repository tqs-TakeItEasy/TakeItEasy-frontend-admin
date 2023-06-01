import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConfigProvider } from 'antd'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorText: '#333333',
          colorPrimary: '#748DA6',
        },
      }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
