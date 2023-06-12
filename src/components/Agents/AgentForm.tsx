import React from 'react'

const AgentForm: React.FC = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
        />

        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
        />

        <label htmlFor="photo-url">Photo Url:</label>
        <input
          type="text"
          name="photo-url"
          id="photo-url"
        />

        <label htmlFor="agent-licence">Agent Licence:</label>
        <input
          type="text"
          name="agent-licence"
          id="agent-licence"
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
        />

        <label htmlFor="practice-areas">Practice Areas:</label>
        <input
          type="text"
          name="practice-areas"
          id="practice-ares"
        />

        <label htmlFor="about-me">About Me:</label>
        <textarea
          name="about-me"
          id="about-me"
          cols={30}
          rows={10}
        ></textarea>
      </form>
    </div>
  )
}

export default AgentForm
