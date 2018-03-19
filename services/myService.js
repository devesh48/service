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

    getName (inputName) {
        return new Promise ((resolve , reject)=>{
            let name = {"first": " ","last" : "upadhyay"}
            name.first = inputName;
            resolve(name);
        });
    }

    getName2 (inputName){
        return new Promise ((resolve,reject)=>{
            let name = {"first": " ","last" : "singh"}
            name.first = inputName;
            resolve(name);
        });
    }

    getmyData (inputName){
        return new Promise ((resolve, reject)=>{
            var info = {name, email,phone};
            info.name = inputName;
            info.email = "abc@trav.com";
            info.phone = "1234556";
            resolve (info);
        })
    }
}

module.exports = new myServiceClass;