'use strict'

import path from 'path'
import http from 'http'
import course from 'course'
import React from 'react'
import App from './views/app'

const server = http.createServer()
const port = process.env.PORT || 3000
const router = course()

server.on('request', onRequest)
server.on('listening', onListening)

router.get('/', (req, res) => {
  let html = React.renderToString(<App />)

  res.setHeader('Content-Type', 'text/html')
  res.end(html)
})

server.listen(port)

function onRequest (req, res) {
  router(req, res, (err) => {
    if (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      return res.end(err.message)
    }

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end(`404 Not Found: ${req.url}`)
  })
}

function onListening (req, res) {
  console.log(`Server listening on port: ${port}`)
}
