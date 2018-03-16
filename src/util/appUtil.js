/*!
 * zeroapp
 * Copyright(c) 2018 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var fs = require('fs'),
    path = require('path');

var Constants = require('./constants');

module.exports.defaultConfiguration = function(app){
  var args = parseArgs(process.argv);
  loadCfg(app);
};

var loadCfg = function(app){
  app.loadConfigBaseApp(Constants.RESERVED.SERVER, Constants.FILEPATH.SERVER);
};

var parseArgs = function(args){};
