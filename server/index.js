var express = require('express')
var app = express()
var proxy = require('http-proxy-middleware')
// var fs = require('fs')
var path = require('path')
var myPackage = require('../package.json')
var packageName = myPackage.name

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
app.use(`/${packageName}`, express.static(path.join(__dirname, '../dist'), options))

var port = 3000
app.listen(port, function() {
  console.log(`start service: http://localhost:${port}/${packageName}/index`)
})
