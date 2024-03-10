const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://94.228.124.88:3001",
      changeOrigin: true,
    }),
  );
};
