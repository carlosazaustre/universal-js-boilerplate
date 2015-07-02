'use strict'

import Client from 'react-engine/lib/client'
import App from './views/app.jsx'

const options = {
  viewResolver(viewName) {
    return require('./views/' + viewName)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Client.boot(options)
})
