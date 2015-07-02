'use strict'

import path from 'path'
import express from 'express'
import engine from 'react-engine'

const app = express()
const port = process.env.PORT || 3000

// -- Setup React Views engine -------------------------------------------------

app.engine('.jsx', engine.server.create({
  reactRoutes: path.join(__dirname, 'routes.js')
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.set('view', engine.expressView)

// -- Routes -------------------------------------------------------------------

app.use('/assets', express.static('public'))
app.get('/', (req, res) => {
  res.render( req.url, { title: 'Titulo' } )
})

// -- Start the application server ---------------------------------------------

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})
