const express = require('express');
const logger = require ('morgan');

class myServiceClass {

    helloService(req,res) {
        console.log("inside Hello Service");
        var result = new Promise((resolve, reject) => {
            const hello = "Hello from the NodeJs first program";
            resolve (hello);
        }).then((val)=>{return val}).catch((e)=>{
            reject(e);
        });
        return result;
    }

    getNameService (inputName) {
        return new Promise ((resolve , reject)=>{
            let name = {"first": "Hello","last" : "upadhyay"}
            name.first = inputName;
            resolve(name);
        });
    }

    getName2Service (inputName){
        return new Promise ((resolve,reject)=>{
            let name = {"first": " ","last" : "singh"}
            name.first = inputName;
            resolve(name);
        });
    }

    getDataService (inputName){
        return new Promise ((resolve, reject)=>{
            var info = {name : "", email: "",phone : ""};
            info.name = inputName;
            info.email = "abc@trav.com";
            info.phone = "1234556";
            resolve (info);
        })
    }
}

module.exports = new myServiceClass;