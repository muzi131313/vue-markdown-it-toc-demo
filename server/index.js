var express = require('express')
var app = express()
var proxy = require('http-proxy-middleware')

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: 'index.html',
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use('/api', proxy({
  target: 'http://hnseal.cn/sealsite/4100', // 接口的域名
  changeOrigin: true
}))
app.use('/', express.static('dist', options))

var port = 3000
app.listen(port, function() {
  console.log('start service: http://localhost:' + port)
})
