import Client from 'react-engine/lib/client';
import routes from '../shared/routes.js';

// -- Boot Options
const options = { routes };

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options);
});
