"use strict";
var statusBoard = require('status-board').default;
var options = {
  port: process.env.PORT || 3000,
  install: false
  // filters: {
  // jobFilter: 'picture',
  // jobFilter: 'pic(.*)day',
  // dashboardFilter: 'myfirst',
  // dashboardFilter: 'my(.*)board',
  // },
};

function callback(err) {
  if (err) {
    throw err;
  }
}

console.log('options', options);

statusBoard(options, callback);
