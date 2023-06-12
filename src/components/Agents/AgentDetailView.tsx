import React from 'react'
import { IAgent } from '../../types/Agent'

interface AgentDetailViewProps {
  currentAgent: IAgent[]
}

const AgentDetailView: React.FC<AgentDetailViewProps> = ({ currentAgent }) => {
  return (
    <div>
      {currentAgent.length ? (
        <div>
          <header>
            <div className="avatar-holder">
              <img
                src={currentAgent[0].photoUrl}
                className="avatar"
                alt={currentAgent[0].firstName}
              />
            </div>
            <h2 className="agent-name">
              {currentAgent[0].firstName + ' ' + currentAgent[0].lastName}
            </h2>
          </header>
          <div>{currentAgent[0].aboutMe}</div>
          <footer>
            <div className="full-width-flex-box">
              <div className="one-third-flex-box">
                <span>{currentAgent[0].address}</span>
              </div>
              <div className="one-third-flex-box">
                <span>Areas of Practice: {currentAgent[0].practiceAreas}</span>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default AgentDetailView
