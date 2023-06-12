import type { FC } from 'react'
import { useState, useEffect } from 'react'
import Agent from './Agent'
import { IAgent } from '../../types/Agent'
import axios from '../../utils'
import './Agents.css'
import { Row, Col, Button } from 'antd'

import AgentForm from './AgentForm'
import SearchForm from './SearchForm'

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

  const handleSuccess = (newAgent: IAgent) => {
    setAgents([...agents, newAgent])
    setFormVisible(false)
  }

  const handleOnSearch = (search: string) => {
    axios.get('/agents', { params: { search } }).then(({ data }) => {
      setAgents([...data])
    })
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
      <div className="agents">
        {agents.map((agent) => (
          <Agent
            key={agent.id}
            agent={agent}
          />
        ))}
      </div>
    </div>
  )
}

export default Agents
