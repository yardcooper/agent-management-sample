import type { FC } from 'react'
import { useState, useEffect } from 'react'
import Agent from './Agent'
import { IAgent } from '../../types/Agent'
import axios from '../../utils'
import './Agents.css'
import AgentForm from './AgentForm'
import { Row, Col } from 'antd'

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([])
  const [formVisible, setFormVisible] = useState<boolean>(false)

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

  return (
    <div>
      <div className="agents">
        {agents.map((agent) => (
          <Agent
            key={agent.id}
            agent={agent}
          />
        ))}
      </div>
      <button onClick={handleShowForm}>Join the team!</button>
      {formVisible ? (
        <Row justify={'center'}>
          <Col span={20}>
            <AgentForm />
          </Col>
        </Row>
      ) : (
        ''
      )}
    </div>
  )
}

export default Agents
