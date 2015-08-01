import Client from 'react-engine/lib/client';
import routes from '../shared/routes.js';

// -- Boot Options
const options = {
  routes: routes,

  // Supply a function that can be called
  // to resolve the file that was rendered.
  viewResolver: function(viewName) {
    return require('../shared/components/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options);
});
