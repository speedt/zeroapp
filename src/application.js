/*!
 * zeroapp
 * Copyright(c) 2018 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var fs = require('fs'),
    path = require('path'),
    EventEmitter = require('events').EventEmitter;

var Constants = require('./util/constants'),
    appUtil = require('./util/appUtil');

var Application = module.exports = {};

var STATE_INITED  = 1,  // app has inited
    STATE_START   = 2,  // app start
    STATE_STARTED = 3,  // app has started
    STATE_STOPED  = 4;  // app has stoped

Application.init = function(opts){
  var self = this;
  opts = opts || {};
  self.settings = {};

  var base = opts.base || path.dirname(require.main.filename);
  self.set(Constants.RESERVED.BASE, base, true);
  self.event = new EventEmitter();  // event object to sub/pub events

  appUtil.defaultConfiguration(self);

  self.state = STATE_INITED;
  console.log('[INFO ] [%s] app inited: %j'.green, new Date().getTime(), self.getServerId());
};

Application.getServerId = function(){
  return this.get(Constants.RESERVED.SERVER_ID);
};

Application.get = function(setting){
  return this.settings[setting];
};

Application.set = function(key, val){
  this.settings[key] = val;
  return this;
};

Application.loadConfigBaseApp = function(key, val, reload){
  var self = this;

  var originPath = path.join(self.getBase(), val);
  console.log(originPath)
};

Application.getBase = function(){
  return this.get(Constants.RESERVED.BASE);
};
