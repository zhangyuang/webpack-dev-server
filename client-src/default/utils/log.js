import logger from 'webpack/lib/logging/runtime';

export function createLogger(level = 'info') {
  logger.configureDefaultLogger({ level });

  return logger.getLogger('webpack-dev-server');
}
