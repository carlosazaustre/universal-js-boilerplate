'use strict'

import Client from 'react-engine/lib/client'
import routes from './routes.js'

document.addEventListener('DOMContentLoaded', () => {
  Client.boot({ routes })
})
