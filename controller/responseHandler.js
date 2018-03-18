const express = require('express');
const logger = require ('morgan');
const service = require('../services/myService');

class responseHandler {

    sendResponse(req,res) {
        console.log("inside response handler");
        res.json(res.body);
       // res.send(res);
    }
}

module.exports = new responseHandler;