'use strict'

import course from 'course'
import React from 'react'
import App from '../views/app'

const router = course()

router.get('/', (req, res) => {
  let html = React.renderToString(<App />)

  res.setHeader('Content-Type', 'text/html')
  res.end(html)
})

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

export default onRequest
