const express = require('express');
const { testController } = require('../controller/testController');

const testRoute = express.Router();

testRoute.get('/test/orders',testController);

exports.testRoute  =testRoute;


