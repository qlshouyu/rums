const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/rums', {
      target: 'http://127.0.0.1:8000',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/rums": ""
      }
    }))
}