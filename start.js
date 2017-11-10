"use strict";
statusBoard = require('status-board');

statusBoard({port: process.env.STATUS_BOARD_PORT || 3000, install: true}, function (err) {
  if (err) {
    throw err;
  }
});