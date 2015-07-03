'use strict';

import path from 'path';
import express from 'express';
import engine from 'react-engine';
import config from '../config';

const app = express();
const port = config.app.port;

// -- Setup React Views engine -------------------------------------------------

app.engine('.jsx', engine.server.create());
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

// -- Routes -------------------------------------------------------------------

app.use('/assets', express.static(path.join(__dirname, '..', 'build', 'public')));

app.get('/', (req, res) => {
  res.render('app', {
    components: [
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: 'Item 3' }
    ],
    title: config.app.name
  });
});

// -- Start the application server ---------------------------------------------

app.listen(port, () => {
  console.log(`WebServer listening on port: ${port}`);
});
