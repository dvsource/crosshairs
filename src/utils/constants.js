module.exports = {
  ENV: {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
  },
  MESSAGE: {
    SERVER: {
      DB_CONNECTED: 'MongoDB Connected',
      SERVER_LISTENING: (port) => `Listening to port ${port}`,
      INVALID_CONFIG: (message) => `Config validation error: ${message}`,
    },
    RESPONSE: {
      SUCCESS: 'SUCCESS',
      ERROR: 'ERROR',
    },
  },
  MONGODB: {
    LOCAL_URL: 'mongodb://localhost:27017',
    DATABASE: 'crosshair-test-db',
    DEFAULT_ADMIN_USER: 'admin',
    DEFAULT_ADMIN_PASS: 'pass',
  },
  LOGGER: {
    LEVEL: {
      INFO: 'info',
      ERROR: 'error',
    },
  },
};
