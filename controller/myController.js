const express = require('express');
const logger = require ('morgan');
const myService = require('../services/myService');

class myControllerClass {

    hello(req,res,next) {
        console.log("inside Hello controller");
        return new Promise((resolve, reject) => {
            myService.helloService().then( function (result) {
                resolve(result);
            }).catch((e)=>{
                reject(e);
            });
            next();
        });
    }

    getyourName (req,res,next){
        console.log("Logging from inside of GET_YOUR_NAME function");
        return new Promise ((fulfill, reject)=>{
            let name = req.params.name;
            if(name == null)
            {
                console.log(`NAME is null or blank`);
                reject();
            }
            myService.getName(name).then(
                (fullname)=>{
                    fulfill(fullname);
                }
            ).catch((e)=>{
                reject(e);
            });
            next();
        });
    }

    getyourName2 (req,res){
        console.log("Logging from inside of GET_YOUR_NAME_2 function");
        let name = req.params.name;
        myService.getName2(name)
            .then((records) => {
                res.send(records);
            });
    }

    getmyData (req,res){
        console.log("Logging from inside of GET_MY_DATA function");
        let name = req.params.name;
        myService.getmyData(name).then(
            (record)=>{
                res.send(record);
            }
        );
    }
}

module.exports = new myControllerClass;