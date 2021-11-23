const { createServer } = require('http')
const { dotenv } = require('./lib/dotenv')
const { createApp } = require('./app')

dotenv.config()

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const app = createApp()
const server = createServer(app)

function startServer() {
  server.listen(port, host, () => {
    console.log(`Server is started and is listening on port ${port} of ${host}`)
  })
}
