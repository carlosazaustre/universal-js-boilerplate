'use strict';

import path from 'path';
import express from 'express';
import engine from 'react-engine';
import favicon from 'serve-favicon';
import config from '../config';

const app = express();
const port = config.app.port;

// -- Setup React Views engine -------------------------------------------------

app.engine('.jsx', engine.server.create({
  reactRoutes: path.join(__dirname, '..', 'shared', 'routes.js')
}));
app.set('views', path.join(__dirname, '..', 'shared', 'components'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

// -- Routes & Middlewares -----------------------------------------------------

let publicPath = path.join(__dirname, '..', '..', '..', 'build', 'public');
app.use(express.static(publicPath));

let faviconPath = path.join(__dirname, '..', '..', '..', 'build', 'public', 'favicon.ico');
app.use(favicon(faviconPath));

let components = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' }
];
app.get('*', (req, res) => {
  res.render(req.url, {
    components: components,
    title: config.app.name
  });
});

// -- Start the application server ---------------------------------------------

app.listen(port, () => {
  console.log(`WebServer listening on port ${port}`);
});
