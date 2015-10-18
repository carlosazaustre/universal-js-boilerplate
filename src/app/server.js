import path    from 'path';
import Express from 'express';
import qs      from 'qs';
import engine  from 'react-engine';
import favicon from 'serve-favicon';
import config  from './config';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../tasks/cfg/webpack-config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './containers/App';
import { fetchCounter } from './api/counter';

const app = new Express();
const port = config.app.port;

// -- Setup React Views engine -------------------------------------------------

app.engine('.jsx', engine.server.create({
  reactRoutes: path.join(__dirname, '..', 'app', 'routes.js')
}));
app.set('views', path.join(__dirname, '..', 'app', 'components'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

const publicPath = path.join(__dirname, '..', '..', 'build', 'public');
const faviconPath = path.join(__dirname, '..', '..', 'build', 'public', 'favicon.ico');

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(Express.static(publicPath));
app.use(favicon(faviconPath));

app.get('*', (req, res) => {

  // Query our mock API asynchronously
  fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 0;

    // Compile an initial state
    const initialState = { counter };

    // Create a new Redux store instance
    const store = configureStore(initialState);

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
  });
});

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/app.js"></script>
      </body>
    </html>
    `;
}

app.listen(port, () => {
  console.log(`WebServer listening on port ${port}`);
});
