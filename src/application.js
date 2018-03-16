/*!
 * zeroapp
 * Copyright(c) 2018 huangxin <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var fs = require('fs'),
    path = require('path'),
    EventEmitter = require('events').EventEmitter;

var Application = module.exports = {};

var STATE_INITED  = 1,  // app has inited
    STATE_START   = 2,  // app start
    STATE_STARTED = 3,  // app has started
    STATE_STOPED  = 4;  // app has stoped

Application.init = function(opts){
  var self = this;
  opts = opts || {};
  self.settings = {};

  self.state = STATE_INITED;
  console.log('[INFO ] [%s] app inited: %j'.green, new Date().getTime(), self.getServerId());
};

Application.getServerId = function(){
  return this.get(Constants.RESERVED.SERVER_ID);
};
