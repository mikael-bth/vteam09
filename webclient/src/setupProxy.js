const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/scooters',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
  app.use(
    '/v1/users',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
  app.use(
    '/v1/user/login',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
};