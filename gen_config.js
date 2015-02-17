var url = require('url');
var fs = require('fs');
var baseConfig = require('./config');
var redis = url.parse(process.env.REDIS_1_PORT);

redis.protocol = 'redis';

baseConfig.driver = url.format(redis);

fs.writeFileSync('/hipache/config.json', JSON.stringify(baseConfig));
