const { parse } = require('url');
'use strict';

module.exports = app => {
  // For the development version, we'll use React.
  // Because, it support react hot loading and so on.
  if (app.env === 'local') {
    moduleAlias.addAlias('react', 'preact-compat');
    moduleAlias.addAlias('react-dom', 'preact-compat');
  }
}
