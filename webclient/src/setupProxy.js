const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/scooters',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
};