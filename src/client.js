'use strict';

import Client from 'react-engine/lib/client';

const options = {
  viewResolver (viewName) {
    return require('./views/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Client.boot(options);
});
