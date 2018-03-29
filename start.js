"use strict";
const statusBoard = require('status-board').default;

statusBoard(
  {
    port: process.env.ATLASBOARD_PORT || 3000,
    install: false,
    // filters: {
    // jobFilter: 'picture',
    // jobFilter: 'pic(.*)day',
    // dashboardFilter: 'myfirst',
    // dashboardFilter: 'my(.*)board',
    // },
  },
  function (err) {
    if (err) {
      throw err;
    }
  }
);