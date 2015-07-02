'use strict'

import express from 'express'
import engine from 'react-engine'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

// -- View Engine --------------------------------------------------------------

app.engine('.jsx', engine.server.create())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.set('view', engine.expressView)

app.get('/', (req, res) => {
  res.render('app')
})

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`)
})
