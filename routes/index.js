var express = require('express');
var router = express.Router();
const control = require ('../controller/myController');
const ResponseHandler = require ('../controller/responseHandler')
router.get('/service/hello',control.hello,ResponseHandler.sendResponse);

module.exports = router;
