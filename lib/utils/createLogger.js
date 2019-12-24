'use strict';

function createLogger(compiler, level = 'info') {
  if (compiler === undefined) {
    const log = require('webpack/lib/logging/runtime');

    log.configureDefaultLogger({
      level,
    });

    return log.getLogger('webpack-dev-server');
  } else {
    return compiler.getInfrastructureLogger('webpack-dev-server');
  }
}

module.exports = createLogger;
