import type { FC } from 'react'
import { useState, useEffect, useMemo } from 'react'
import Agent from './Agent'
import { IAgent } from '../../types/Agent'
import axios from '../../utils'
import './Agents.css'
import { Row, Col, Button, Modal } from 'antd'

import AgentForm from './AgentForm'
import SearchForm from './SearchForm'
import AgentDetailView from './AgentDetailView'

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([])
  const [formVisible, setFormVisible] = useState<boolean>(false)
  const [selectedAgent, setSelectedAgent] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentAgent = useMemo(() => {
    return agents.filter((agent) => agent.id === selectedAgent)
  }, [agents, selectedAgent])

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get('/agents')
      setAgents(response.data)
    }
    fetchInitialData()
  }, [])

  const handleShowForm = () => {
    setFormVisible(true)
  }

  const handleSuccess = (newAgent: IAgent) => {
    setAgents([...agents, newAgent])
    setFormVisible(false)
  }

  const handleOnSearch = (search: string) => {
    axios.get('/agents', { params: { search } }).then(({ data }) => {
      setAgents([...data])
    })
  }

  const handleAgentDetail = (agentId: string) => {
    setSelectedAgent(agentId)
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Button
        type="link"
        onClick={handleShowForm}
      >
        Join the team!
      </Button>
      <SearchForm handleOnSearch={handleOnSearch} />

      {formVisible ? (
        <Row justify={'center'}>
          <Col span={20}>
            <AgentForm handleSuccess={handleSuccess} />
          </Col>
        </Row>
      ) : (
        ''
      )}
      {/* <div className="agents"> */}
      <Row>
        {agents.map((agent) => (
          <Col span={6}>
            <Agent
              key={agent.id}
              agent={agent}
              handleAgentDetail={handleAgentDetail}
            />
          </Col>
        ))}
      </Row>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AgentDetailView currentAgent={currentAgent} />
      </Modal>
    </div>
    // </div>
  )
}

export default Agents
