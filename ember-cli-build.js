'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-prism': {
      components: ['javascript', 'json', 'bash', 'turtle', 'sparql'],
    },
  });

  return app.toTree();
};
