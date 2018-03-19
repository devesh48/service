const express = require('express');
const logger = require ('morgan');
const service = require('../services/myService');

class myControllerClass {

    hello(req,res,next) {
        console.log("inside Hello controller");
        return new Promise((resolve, reject) => {
            service.helloService().then( function (result) {
                resolve(result);
            }).catch((e)=>{
                reject(e);
            });
            next();
        });
    }
}

module.exports = new myControllerClass;