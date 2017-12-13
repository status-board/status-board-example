"use strict";
const statusBoard = require('status-board').default;

statusBoard(
  {
    port: process.env.ATLASBOARD_PORT || 3000,
    install: false
  },
  function (err) {
    if (err) {
      throw err;
    }
  }
);