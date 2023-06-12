import type { FC } from 'react'
import { useState, useEffect } from 'react'
import Agent from './Agent'
import { IAgent } from '../../types/Agent'
import axios from 'axios'
import './Agents.css'
import AgentForm from './AgentForm'

axios.defaults.baseURL = 'http://localhost:3001'

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
    <div className="agents">
      {agents.map((agent) => (
        <Agent
          key={agent.id}
          agent={agent}
        />
      ))}
      <button onClick={handleShowForm}>Join the team!</button>
      {formVisible ? <AgentForm /> : ''}
    </div>
  )
}

export default Agents
