const express = require('express')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')
const enfore = require('express-sslify')
const path = require('path')

const app = express();

app.use(enfore.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic(__dirname + '/dist'));
app.use(history());

app.listen(process.env.PORT || 5000);
