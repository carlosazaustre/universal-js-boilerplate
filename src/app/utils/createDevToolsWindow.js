import React from 'react';
import { render } from 'react-dom';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

/**
 * Puts Redux DevTools into a separate window.
 * Based on https://gist.github.com/tlrobinson/1e63d15d3e5f33410ef7#gistcomment-1560218.
 */
export default function createDevToolsWindow(store) {
  // Window name.
  const name = 'Redux DevTools';

  // Give it a name so it reuses the same window.
  const win = window.open(
    null,
    name,
    'menubar=no,location=no,resizable=yes,scrollbars=no,status=no'
  );

  // Reload in case it's reusing the same window with the old content.
  win.location.reload();

  // Set visible Window title.
  win.document.title = name;

  // Wait a little bit for it to reload, then render.
  setTimeout(() => render(
    <DebugPanel top right bottom left>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>,
    win.document.body.appendChild(document.createElement('div'))
  ), 10);
}
