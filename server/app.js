const express = require('express')
const cors = require('cors')
const { Agent } = require('./model')
const bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.get('/agents', async (req, res, next) => {
  console.log(req.query)
  if (req.query.search) {
    const agents = (await Agent.findAll()).filter((agentItem) => {
      return (
        agentItem.practiceAreas
          .toLowerCase()
          .search(req.query.search.toLowerCase()) !== -1
      )
    })
    return res.json(agents)
  }

  const agents = await Agent.findAll()
  return res.json(agents)
})

app.post('/agents', async (req, res, next) => {
  const newAgent = await Agent.create(req.body)
  return res.json(newAgent)
})

module.exports = app
