/*!
 * zeroapp
 * Copyright(c) 2018 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var colors = require('colors');

var app = require('../../');

process.on('uncaughtException', function (err){
  console.error(err.stack.red);
});

process.on('exit', function (code){
  if(0 === code) return console.warn('[WARN ] [%s] process exit'.yellow, new Date().getTime());
  console.error('[ERROR] [%s] process exit with code: %s'.red, new Date().getTime(), code);
});

app.createApp(null, function(){
  var self = this;
});
