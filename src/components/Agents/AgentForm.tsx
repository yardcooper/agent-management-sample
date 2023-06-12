import React from 'react'
import { Form, Input, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import axios from '../../utils'
import { IAgent } from '../../types/Agent'

interface AgentFormProps {
  handleSuccess: Function
}

const AgentForm: React.FC<AgentFormProps> = ({ handleSuccess }) => {
  const handleFinish = (values: IAgent) => {
    axios.post('/agents', { ...values }).then(({ data }) => {
      handleSuccess(data)
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
