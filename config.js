module.exports = {
  server: {
    accessLog: "/var/log/hipache_access.log",
    port: 80,
    workers: 10,
    maxSockets: 100,
    deadBackendTTL: 30,
    tcpTimeout: 30,
    retryOnError: 3,
    deadBackendOn500: true,
    httpKeepAlive: false
  }
};
