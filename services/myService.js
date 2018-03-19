const express = require('express');
const logger = require ('morgan');

class myServiceClass {

    helloService(req,res) {
        console.log("inside Hello Service");
        return new Promise((resolve, reject) => {
            const hello = "Hello from the NodeJs first program";
            resolve (hello);
        });
    }
}

module.exports = new myServiceClass;