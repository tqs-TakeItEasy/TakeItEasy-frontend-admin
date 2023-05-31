import { Button, Modal, Form, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';

function NewSeller() {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = (values) => {
        console.log('Success:', values);
        setConfirmLoading(true);
        
        values["company"] = "TakeItEasy"
        axios.post('http://localhost:8080/api/v1/stores/add/', values);
        
        setConfirmLoading(false);
        setOpen(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add a new eSeller
            </Button>
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
        </>
    );
};
export default NewSeller;