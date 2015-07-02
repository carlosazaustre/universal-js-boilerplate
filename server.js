'use strict'

import path from 'path'
import http from 'http'
import router from './router'

const server = http.createServer()
const port = process.env.PORT || 3000

server.on('request', router)
server.on('listening', onListening)

server.listen(port)

function onListening (req, res) {
  console.log(`Server listening on port: ${port}`)
}
