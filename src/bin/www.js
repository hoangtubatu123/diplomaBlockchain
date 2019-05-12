const http = require('http');
import app from '../server/app';

import config from '../config';
require('babel-polyfill');
const server = http.createServer(app);

server.listen(config.app.port, () => {
  () => console.log('Example app listening on port 3000!');
});
