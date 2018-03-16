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
