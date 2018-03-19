const express = require('express');
const logger = require ('morgan');

class responseHandler {

    sendResponse(req,res) {
        console.log("inside response handler");
        //res.send(res);
        res.json(res.body);
    }
}

module.exports = new responseHandler;