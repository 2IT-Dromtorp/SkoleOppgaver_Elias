const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/signup', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/filer', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/fil', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/upload', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/download', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/login', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/socket', {
      target: 'http://localhost:8080',
      changeOrigin: true,
      ws: true,
    })
  );
  app.use(
    createProxyMiddleware('/2step', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
}

