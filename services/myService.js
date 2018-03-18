const express = require('express');
const logger = require ('morgan');
const service = require('../services/myService');

class myServiceClass {

    helloServ(req,res) {
        console.log("inside Hello Service");
        return new Promise((resolve, reject) => {
            var hello = "Hello from the Nodejs first program";
            resolve (hello);
        });
    }
}

module.exports = new myServiceClass;