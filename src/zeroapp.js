/*!
 * zeroapp
 * Copyright(c) 2018 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var fs = require('fs'),
    path = require('path');

var application = require('./application');

var ZeroApp = module.exports = {
  version: require('../package.json').version,
};

var self = this;

var load = function(path, name){
  if(name) return require(path + name);
  return require(path);
};

ZeroApp.createApp = function(opts, cb){
  var app = application;
  app.init(opts);
  self.app = app;
  cb.bind(app)();
};
