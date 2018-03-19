const express = require('express');
const router = express.Router();
const control = require ('../controller/myController');
const ResponseHandler = require ('../controller/responseHandler');


router.get('/service/hello',control.hello,ResponseHandler.sendResponse);
router.get('/service/yourName:name', control.getyourName,ResponseHandler.sendResponse);
router.get('/service/getData:name',control.getmyData);
router.get ('/service/yourName2:name',control.getyourName2);

module.exports = router;
