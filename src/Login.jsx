import React from 'react';
import { Form, Input, Button } from 'antd';

function Login({ onFinish }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#9CB4CC' }} data-testId="Login">
            <Form
                name="loginForm"
                onFinish={onFinish}
                style={{ maxWidth: 300, margin: '0 auto' }}
            >
                <img src="/takeiteasy.png" alt="logo" width={"100%"} style={{
                    transform: "scale(2)",
                    translate: "0% -60%",
                }} />
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please enter your username!' }]}
                >
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;