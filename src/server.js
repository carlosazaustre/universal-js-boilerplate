'use strict';

import path from 'path';
import express from 'express';
import fetch from 'node-fetch';
import engine from 'react-engine';
import config from '../config';

const app = express();
const api = config.api;
const port = config.port;

// -- Setup React Views engine -------------------------------------------------

app.engine('.jsx', engine.server.create());
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

// -- Routes -------------------------------------------------------------------

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  fetch(`${api}/resources`)
    .then(response => response.json())
    .then((data) => {
      res.render('app', {
        resources: data.resources,
        title: 'Project - Resource List'
      });
    });
});

// -- Start the application server ---------------------------------------------

app.listen(port, () => {
  console.log(`WebServer listening on port: ${port}`);
});
