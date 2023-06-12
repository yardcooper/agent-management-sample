import React from 'react'
import { Form, Input, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import axios from '../../utils'
interface FormDataProps {
  firstName: string
  lastName: string
  address: string
  agentLicence: string
  practiceAreas: string
  aboutMe: string
  photoUrl: string
}

const AgentForm: React.FC = () => {
  const handleFinish = (values: FormDataProps) => {
    axios.post('/agents', { ...values }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        labelWrap
        colon={false}
        style={{ maxWidth: 800 }}
        onFinish={handleFinish}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="photoUrl"
          label="Photo Url"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="agentLicence"
          label="Agent Licence"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="practiceAreas"
          label="Practice Areas"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="aboutMe"
          label="About Me"
        >
          <TextArea />
        </Form.Item>
        <Form.Item label=" ">
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AgentForm
