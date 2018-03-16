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
  setupEnv(app, args);
  loadCfg(app);
  processArgs(app, args);
};

var loadCfg = function(app){
  app.loadConfigBaseApp(Constants.RESERVED.SERVER, Constants.FILEPATH.SERVER);
};

var parseArgs = function(args){
  var argsMap = {};
  return argsMap;
};

var processArgs = function(app, args){
  app.set(Constants.RESERVED.SERVER_ID, args.id || app.get(Constants.RESERVED.SERVER).id, true);
};

var setupEnv = function(app, args){
  app.set(Constants.RESERVED.ENV, args.env || process.env.NODE_ENV || Constants.RESERVED.ENV_DEV, true);
};
